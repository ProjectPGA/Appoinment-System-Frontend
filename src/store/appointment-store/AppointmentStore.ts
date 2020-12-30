import { Module } from 'vuex-smart-module';

import AppointmentState from './AppointmentState';
import AppointmentGetters from './AppointmentGetters';
import AppointmentActions from './AppointmentActions';
import AppointmentMutations from './AppointmentMutations';

const appointmentStore = new Module({
    state: AppointmentState,
    getters: AppointmentGetters,
    actions: AppointmentActions,
    mutations: AppointmentMutations,
});

export default appointmentStore;
