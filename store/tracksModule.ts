import {Module, VuexModule, Mutation, Action} from "vuex-module-decorators";
import {ITrack} from "~/types/Track";
import axios from "axios";

@Module({
  name: 'tracksModule',
  stateFactory: true,
  namespaced: true
})
export default class tracksModule extends VuexModule {
  tracks: ITrack[] = [];

  get getTracks(): ITrack[] {
    return this.tracks;
  }

  @Mutation
  fetchTracks(tracks: ITrack[]) {
    this.tracks = tracks;
  }

  @Action({commit: "fetchTracks"})
  async loadTracks() {
    try {
      const response = await axios.get('http://localhost:5000/tracks');
      return response.data
    } catch (e) {
      console.log(e);
    }
  }
}

