import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';
import { ActionTree, ActionContext, GetterTree } from '@/types';
import { AxiosResponse } from 'axios';
import { AuthUser } from '@/models/auth/AuthUser';

Vue.use(Vuex);

export interface AuthState {
    user: AuthUser;
    isLogged: boolean;
    error: boolean;
    errorMessage: string;
}

const actions: ActionTree<AuthState> = {
    // async login(
    //     context: ActionContext<AuthState>,
    //     payload: AuthUser
    // ): Promise<any> {
    //     try {
    //         const response: AxiosResponse = await Vue.axios({
    //             method: 'POST',
    //             url: '/login',
    //             data: payload,
    //         });
    //         context.commit('setUser', payload);
    //     } catch (error) {
    //         if (error.response) {
    //             context.commit('authError', error.response.statusText);
    //         }
    //     }
    // },
};

const mutations: MutationTree<AuthState> = {
    setUser(state: AuthState, user: AuthUser) {
        state.user = user;
        state.isLogged = true;
        state.error = false;
        state.errorMessage = '';
    },
    unsetUser(state: AuthState) {
        state.user = emptyUser;
        state.isLogged = false;
    },
    authError(state: AuthState, payload: string) {
        state.error = true;
        state.errorMessage = payload;
        state.user = { id: 0, name: '', admin: false, email: '' };
        state.isLogged = false;
    },
};

const getters: GetterTree<AuthState> = {
    isLoggedIn(state) {
        return state.isLogged === true;
    },
    isLoggedOut(state) {
        return state.isLogged === false;
    },
};

export const getInitialState = (): AuthState => ({
    user: emptyUser,
    isLogged: false,
    error: false,
    errorMessage: '',
});

const emptyUser: AuthUser = {
    id: 0,
    name: '',
    admin: false,
    email: '',
};

const auth = {
    namespaced: true,
    state: getInitialState(),
    mutations,
    actions,
    getters,
};

export default auth;
