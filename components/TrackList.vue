<template>
  <div class="tracks-wrapper">

    <div v-for="track in tracks">
      <TrackItem
        :key = track._id
        :track = track
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "nuxt-property-decorator";
import {ITrack} from "~/types/Track";


@Component
export default class TrackList extends Vue {
  name: string = "TrackList";
  @Prop({required: true}) tracks!: ITrack[]
}
</script>

<style lang="scss" scoped>

.tracks-wrapper {
  width: 65%;
  margin: auto;
  padding: 55px;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
}

</style>
