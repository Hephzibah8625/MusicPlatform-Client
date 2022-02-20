<template>
  <div class="main">
    <div class="create-block">

      <h1>Список треков</h1>

      <NuxtLink to="/tracks/create">
        <div>
          <span>Загрузить</span>
        </div>
      </NuxtLink>

    </div>
    <TrackList :tracks="tracks.tracks"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"
import {getModule} from "vuex-module-decorators";
import tracksModule from "~/store/tracksModule";

@Component
export default class Index extends Vue {
  name: string = "Index";
  tracks: any = getModule(tracksModule, this.$store);

  created() {
    this.tracks.loadTracks();
  }
}
</script>

<style lang="scss" scoped>

.main {
  max-width: 1920px;
  width: 100%;
  height: 100%;
  min-height: 1080px;
}

.create-block {
  width: 65%;
  height: 150px;
  margin: 100px auto 50px auto;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  padding: 0 55px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    span {
      font-size: 25px;
    }
  }
  div:hover {
    border-bottom: 1px solid black;
  }
}

</style>
