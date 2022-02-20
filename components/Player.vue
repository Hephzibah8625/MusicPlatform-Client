<template>
  <div v-show="myMod.active !== null" class="player">
    <div class="icon" @click="play">
      <i v-if="myMod.pause === true" class="fas fa-play"></i>
      <i v-else class="fas fa-pause"></i>
    </div>
    <div class="name">
      <span>{{trackName}}</span>
      <span>{{trackArtist}}</span>
    </div>
    <div class="progress">
      <TrackProgress :left="myMod.currentTime" :right="myMod.duration" :onChange="changeCurrentTime"/>
    </div>
    <div class="volume">
      <TrackProgress :left="myMod.volume" :right="100" :onChange="changeVolume" />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "nuxt-property-decorator";
import {getModule} from "vuex-module-decorators";
import playerModule from "~/store/playerModule";

let audio: any;

@Component
export default class Player extends Vue {
  name: string = "Player";
  myMod: any = getModule(playerModule, this.$store);

  get trackName() {
    if (this.myMod.active === null) return ''
    else return this.myMod.active.name;
  }
  get trackArtist() {
    if (this.myMod.active === null) return ''
    else return this.myMod.active.artist;
  }
  get moduleActive() {
    return this.myMod.active;
  }

  @Watch('moduleActive')
  activeChanged() {
    if (!audio) {
      audio = new Audio()
    }
    if (this.myMod.active != null) {
      audio.src = 'http://localhost:5000/' + this.myMod.active.audio;
      audio.loop = true;
      audio.onloadedmetadata = () => {
        this.myMod.setDuration(Math.ceil(audio.duration));
      }
      audio.ontimeupdate = () => {
        this.myMod.setCurrentTime(Math.ceil(audio.currentTime));
      }
      this.myMod.playTrack();
      audio.play();
    }
  }

  play() {
    if (this.myMod.pause) {
      this.myMod.playTrack();
      audio.play()
    }
    else {
      this.myMod.pauseTrack();
      audio.pause()
    }
  }

  changeVolume(event: any) {
    audio.volume = Number(event.target.value) / 100;
    this.myMod.setCurrentVolume(Number(event.target.value));
  }

  changeCurrentTime(event: any) {
    audio.currentTime = Number(event.target.value);
    this.myMod.setCurrentTime(Number(event.target.value));
  }
}
</script>

<style lang="scss" scoped>

.player {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;

  display: flex;
  align-items: center;

  background-color: lightgrey;
  padding: 0 10px;
}

.name {
  margin-left: 35px;
  span {
    display: block;
  }
}

.volume {
  margin-left: auto;
  margin-right: 55px;
}
</style>
