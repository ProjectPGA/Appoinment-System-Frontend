import { Actions } from 'vuex-smart-module';

import AppointmentState from './AppointmentState';
import AppointmentMutations from './AppointmentMutations';
import AppointmentGetters from './AppointmentGetters';

export default class AppointmentActions extends Actions<
  AppointmentState,
  AppointmentGetters,
  AppointmentMutations,
  AppointmentActions
> {
  public setText(): void {
    this.commit('setText', '');
  }
}
