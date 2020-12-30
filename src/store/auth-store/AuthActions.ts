import { Actions } from 'vuex-smart-module';

import AuthState from './AuthState';
import AuthGetters from './AuthGetters';
import AuthMutations from './AuthMutations';

import { login, getUserData } from '../../webservices/AuthWebservice';

import { UserData } from '../../models/UserData';

import { LoginRequest } from '../../webservices/models/auth/LoginRequest';

export default class AuthActions extends Actions<
    AuthState,
    AuthGetters,
    AuthMutations,
    AuthActions
> {
    public async login({
        loginData,
    }: {
        loginData: LoginRequest;
    }): Promise<boolean> {
        try {
            this.commit('setLoginInProgress', null);

            await login({
                login: loginData.login,
                password: loginData.password,
            });

            const response: UserData = await getUserData();

            if (response.user !== null) {
                this.commit('setLoggedIn', response.user);
            } else {
                this.commit('setUserNotLoggedIn', null);
                return false;
            }
            return true;
        } catch (exception) {
            this.commit('setLoginFailed', null);
            return false;
        }
    }

    public async getUserData(): Promise<void> {
        try {
            const response: UserData = await getUserData();

            if (response.user !== null) {
                this.commit('setLoggedIn', response.user);
            } else {
                this.commit('setUserNotLoggedIn', null);
            }
        } catch (e) {
            this.commit('setUserNotLoggedIn', null);
        }
    }

    public async logout(): Promise<void> {
        location.href = '/api/auth/v1/redirect-to-logout';
    }
}
