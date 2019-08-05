import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import utils, { UtilState } from './utils/store';
import auth, { AuthState } from './auth/store';
import appointment, { DayState } from './appointment/store';

Vue.use(Vuex);

const persistedPaths: string[] = ['settings'];

export default new Vuex.Store({
    plugins: [createPersistedState({ paths: persistedPaths })],
    modules: {
        utils,
        auth,
        appointment,
    },
});

export interface GlobalState {
    auth: AuthState;
    utils: UtilState;
    appointment: DayState;
}
