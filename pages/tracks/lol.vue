<template>
</template>

<script>
import {getModule} from "vuex-module-decorators";
import playerModule from "~/store/playerModule";

export default {
  name: "lol",
  data() {
    return {
      myMod: getModule(playerModule, this.$store),
    }
  },

  watch: {
    'this.myMod.active': {
      handler() {
        console.log('lol')
      }
    }
  }
}
</script>

<style scoped>

</style>
