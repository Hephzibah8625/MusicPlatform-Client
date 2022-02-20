import {Module, VuexModule, Mutation, Action, getModule} from "vuex-module-decorators";
import {ITrack} from "~/types/Track";

@Module({
  name: 'playerModule',
  stateFactory: true,
  namespaced: true
})
export default class playerModule extends VuexModule {
  active: any = null;
  volume: number = 100;
  duration: number = 0;
  currentTime: number = 0;
  pause: boolean = true;

  get getActive(): any {
    return this.active;
  }

  get getVolume(): number {
    return this.volume;
  }

  get getDuration(): number {
    return this.duration;
  }

  get getCurrentTime(): number {
    return this.currentTime;
  }
  get getPause(): boolean {
    return this.pause;
  }

  @Mutation
  playTrack() {
    this.pause = false;
  }

  @Mutation
  pauseTrack() {
    this.pause = true;
  }

  @Mutation
  setCurrentTime(time: number) {
    this.currentTime = time;
  }

  @Mutation
  setCurrentVolume(volume: number) {
    this.volume = volume;
  }

  @Mutation
  setDuration(duration: number) {
    this.duration = duration;
  }

  @Mutation
  setActive(track: ITrack) {
    this.active = track;
    this.duration = 0;
    this.currentTime = 0;
  }
}
