import { Mutations } from 'vuex-smart-module';

import AppointmentState from './AppointmentState';

export default class AppointmentMutations extends Mutations<AppointmentState> {
  public setText(text: string): void {
    this.state.test = text;
  }
}
