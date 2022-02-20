import Vuex from "vuex"
import playerModule from "@/store/playerModule"
import tracksModule from "~/store/tracksModule";

export const store = new Vuex.Store({
  modules: {
    playerModule: playerModule,
    tracksModule: tracksModule,
  }
})

