<template>
  <div class="main">
    <div class="information">
      <div class="input-block">
        <label>Название трека</label>
        <input v-model="track.value"/>
      </div>
      <div class="input-block">
        <label>Имя автора</label>
        <input v-model="artist.value"/>
      </div>
    </div>
    <div class="lyrics">
      <div class="textarea-block">
        <label>Текст песни</label>
        <textarea v-model="text.value"/>
      </div>
    </div>

    <div class="image">
      <label>Изображение</label>
      <FileUpload @on-change="setPicture" accept="image/*">
        <button>Загрузить изображение</button>
      </FileUpload>
    </div>

    <div class="audio">
      <label>Аудио</label>
      <FileUpload @on-change="setAudio" accept="audio/*">
        <button>Загрузить аудио</button>
      </FileUpload>
    </div>

    <div class="upload">
      <button @click="uploadTrack">Загрузить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {ref} from "@nuxtjs/composition-api";
import axios from "axios";

@Component
export default class Create_Name extends Vue {
  name: string = "Create";


  picture: any = ref(null);
  audio: any = ref(null);
  track: any = ref('');
  artist: any = ref('');
  text: any = ref('');

  setPicture(e: any) {
    this.picture.value = e;
  }
  setAudio(e: any) {
    this.audio.value = e;
  }

  uploadTrack() {
    let data = new FormData();
    data.append('name', this.track.value);
    data.append('artist', this.artist.value);
    data.append('text', this.text.value);
    data.append('picture', this.picture.value);
    data.append('audio', this.audio.value);
    axios.post('http://localhost:5000/tracks', data).then(resp => {
            console.log(resp);
            document.location.reload()}).catch(e => console.log(e))
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: 65%;
  margin: 150px auto 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  padding: 55px;
}

.information {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
  margin-bottom: 50px;

  .input-block {
    width: 50%;
    label {
      display: block;
      font-size: 35px;
      margin-bottom: 15px;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      height: 28px;
      line-height: 28px;
      font-size: 25px;
      border-bottom: 1px solid black;
      padding: 5px;
    }
  }
}

.lyrics {
  width: 100%;
  margin-bottom: 50px;

  label {
    display: block;
    font-size: 35px;
    margin-bottom: 15px;
  }
  textarea {
    width: 100%;
    min-height: 100px;
    font-size: 25px;
    line-height: 28px;
    padding: 5px;
    outline: none;
  }
}

.image, .audio {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  label {
    display: block;
    font-size: 35px;
  }
}

.upload {
  button {
    border: none;
    padding: 15px;
    background-color: white;
    cursor: pointer;
    font-size: 20px;
  }
  button:hover {
    background-color: deepskyblue;
    color: white;
  }
}
</style>
