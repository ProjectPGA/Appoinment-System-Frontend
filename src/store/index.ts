import Vue from 'vue';
import Vuex from 'vuex';
import { createStore, Module } from 'vuex-smart-module';
import createPersistedState from 'vuex-persistedstate';

import mainStore from './main-store/MainStore';
import authStore from './auth-store/AuthStore';
import navigationStore from './navigation-store/NavigationStore';
import appointmentStore from './appointment-store/AppointmentStore';

Vue.use(Vuex);

const root = new Module({
  modules: {
    mainStore,
    authStore,
    navigationStore,
    appointmentStore,
  },
});

const persistedPaths = ['path'];
export const store = createStore(root, {
  plugins: [createPersistedState({ paths: persistedPaths })],
});
