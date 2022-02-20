<template>
  <div class="track-progress">
    <input type="range" :min="0" :max="right" :value="left" @change="onChange($event)">
    <div>{{left}} / {{right}}</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";

@Component
export default class TrackProgress extends Vue {
  name: string = "TrackProgress";
  @Prop({required: true}) left!: number;
  @Prop({required: true}) right!: number;
  @Prop({required: true}) onChange!: Function;
}
</script>

<style scoped>

.track-progress {
  display: flex;
}

</style>
