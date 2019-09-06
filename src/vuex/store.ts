import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import utils, { UtilState } from './utils/store';
import auth, { AuthState } from './auth/store';
import appointment, { DayState } from './appointment/store';
import language, { LanguageState } from './language/store';
Vue.use(Vuex);

const persistedPaths: string[] = ['utils', 'auth', 'appointment', 'language'];

export default new Vuex.Store({
    plugins: [createPersistedState({ paths: persistedPaths })],
    modules: {
        utils,
        auth,
        appointment,
        language,
    },
});

export interface GlobalState {
    auth: AuthState;
    utils: UtilState;
    appointment: DayState;
    language: LanguageState;
}
