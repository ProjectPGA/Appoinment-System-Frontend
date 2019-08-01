import Vue from 'vue';
import Vuex, { MutationTree, ActionTree } from 'vuex';

Vue.use(Vuex);

interface State {
    currentLocale: string;
}

const mutations: MutationTree<State> = {
    setCurrentLocale(currentState: State, currentLocale: string) {
        currentState.currentLocale = currentLocale;
    },

    resetState() {
        // acquire initial state
        const s = initialState();
        Object.keys(s).forEach(key => {
            state[key] = s[key];
        });
    },
};

const actions: ActionTree<State, any> = {
    RESET({ commit }) {
        commit('account/resetState', null, { root: true });
        commit('company/resetState', null, { root: true });

        // console.log('RESET FIRED FROM UTILS STORE');
        // Clear also the local storage
        localStorage.clear();
    },
};

const getters = {
    currentLocale(currentState: State) {
        return currentState.currentLocale;
    },
};

function initialState() {
    return {
        currentLocale: 'en',
    };
}

const state: State = initialState();

const module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default module;
