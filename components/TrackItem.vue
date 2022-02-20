<template>
  <div v-on:click="$router.push('/tracks/' + track._id)" class="track-wrapper">
    <span v-on:click="play">Play</span>
    <img :src="'http://localhost:5000/' + track.picture" width="50px" height="50px" alt="track"/>
    <div>
      <span v-text="track.name"></span>
      <span v-text="track.artist"></span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {ITrack} from "~/types/Track";
import {getModule} from "vuex-module-decorators";
import playerModule from "~/store/playerModule";


@Component
export default class TrackList extends Vue {
  name: string = "TrackItem";
  myMod: any = getModule(playerModule, this.$store);

  @Prop({required: true}) track!: ITrack;
  @Prop({required: false, default: false}) active!: boolean;

  play(event: any) {
    event.stopPropagation();
    this.myMod.setActive(this.track);
    this.myMod.playTrack();
  }
}
</script>

<style lang="scss" scoped>

.track-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 15px 5px;

  margin: 35px 0;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);

  span {
    display: block;
  }
}

</style>
