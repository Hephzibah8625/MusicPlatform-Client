<template>
  <div>
    Lol
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {ITrack} from "~/types/Track";

@Component
export default class TrackPage extends Vue {
  name: string = "TrackPage";
  @Prop({required: true}) track!: ITrack;
}
</script>

<style scoped>

</style>
