import { Getters } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainGetters extends Getters<MainState> {
  public get reverseTestdata(): boolean {
    return !this.state.testData;
  }
}
