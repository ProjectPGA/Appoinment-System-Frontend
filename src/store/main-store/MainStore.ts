import { Module } from 'vuex-smart-module';

import MainState from './MainState';
import MainGetters from './MainGetters';
import MainActions from './MainActions';
import MainMutations from './MainMutations';

const mainStore = new Module({
    state: MainState,
    getters: MainGetters,
    actions: MainActions,
    mutations: MainMutations,
});

export default mainStore;
