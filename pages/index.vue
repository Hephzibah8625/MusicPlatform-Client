<template>
  <div class="main">
    <h1>Добро пожаловать!</h1>
    <h3>Здесь собраны лучшие треки</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  max-width: 1920px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 150px;
}

</style>
