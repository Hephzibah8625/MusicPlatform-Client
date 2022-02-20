<template>
  <div v-on:click="() => this.$refs.input.click()">
    <input
      v-show="false"
      type="file"
      :accept="accept"
      ref="input"
      v-on:change="onChange($event)">
    <slot></slot>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Emit, Vue} from "nuxt-property-decorator"

@Component
export default class FileUpload extends Vue {
  @Prop({required: true}) accept!: string;

  name: string = "FileUpload";

  @Emit()
  onChange(event: any) {
    return event.target.files[0];
  }
}
</script>

<style scoped>

</style>
