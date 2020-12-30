import { Module } from 'vuex-smart-module';

import AuthState from './AuthState';
import AuthGetters from './AuthGetters';
import AuthActions from './AuthActions';
import AuthMutations from './AuthMutations';

const authStore = new Module({
    state: AuthState,
    getters: AuthGetters,
    actions: AuthActions,
    mutations: AuthMutations,
});

export default authStore;
