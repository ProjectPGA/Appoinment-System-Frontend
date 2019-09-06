import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';
import { ActionTree, ActionContext, GetterTree } from '@/types';

Vue.use(Vuex);

export interface UtilState {
    currentLocale: string;
    invitationProgress: boolean;
    pastAppoints: boolean;
}

const mutations: MutationTree<UtilState> = {
    setCurrentLocale(currentState: UtilState, currentLocale: string) {
        currentState.currentLocale = currentLocale;
    },
    setInvitationProgress(
        currentState: UtilState,
        invitationProgress: boolean
    ) {
        currentState.invitationProgress = invitationProgress;
    },
    setPastAppoints(currentState: UtilState, currentPastAppoints: boolean) {
        currentState.pastAppoints = currentPastAppoints;
    },
    unsetPastAppoints(currentState: UtilState) {
        currentState.pastAppoints = false;
    },
    resetState() {
        // acquire initial state
        const s = initialState();
        Object.keys(s).forEach(key => {
            state[key] = s[key];
        });
    },
};

const actions: ActionTree<UtilState> = {
    // RESET({ commit }) {
    //     commit('account/resetState', null, { root: true });
    //     commit('company/resetState', null, { root: true });
    //     // console.log('RESET FIRED FROM UTILS STORE');
    //     // Clear also the local storage
    //     localStorage.clear();
    // },
};
const getters = {
    currentLocale(currentState: UtilState) {
        return currentState.currentLocale;
    },
};

function initialState() {
    return {
        currentLocale: 'en',
        invitationProgress: false,
        pastAppoints: false,
    };
}

const state: UtilState = initialState();

const utils = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default utils;
