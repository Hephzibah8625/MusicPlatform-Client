<template>
  <div class="main">
    <div v-if="index === activeStep" v-for="(step, index) in steps">
      <h1 v-text="step"></h1>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class StepWrapper extends Vue {
  name: string = "StepWrapper";
  @Prop({required: false, default: 0}) activeStep!: number;

  steps: string[] = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек'];
}
</script>

<style lang="scss" scoped>

</style>
