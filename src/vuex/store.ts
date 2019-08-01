import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import utils from './utils/store';
import auth, { AuthState } from './auth/store';

Vue.use(Vuex);

const persistedPaths: string[] = ['settings'];

export default new Vuex.Store({
    plugins: [createPersistedState({ paths: persistedPaths })],
    modules: {
        utils,
        auth,
    },
});

export interface GlobalState {
    auth: AuthState;
}
