import { Module } from 'vuex-smart-module';

import NavigationState from './NavigationState';
import NavigationGetters from './NavigationGetters';
import NavigationActions from './NavigationActions';
import NavigationMutations from './NavigationMutations';

const navigationStore = new Module({
  state: NavigationState,
  getters: NavigationGetters,
  actions: NavigationActions,
  mutations: NavigationMutations,
});

export default navigationStore;
