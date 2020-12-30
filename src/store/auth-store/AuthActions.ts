import { Actions } from 'vuex-smart-module';

import AuthState from './AuthState';
import AuthGetters from './AuthGetters';
import AuthMutations from './AuthMutations';

import { login } from '../../webservices/AuthWebservice';

import { LoginRequest } from '../../webservices/models/auth/LoginRequest';
import { UserData } from '@/models/user/UserData';

import router from '@/router';

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

            const response: UserData = await login({
                email: loginData.email,
                password: loginData.password,
            });

            if (response.user !== null) {
                this.commit('setLoggedIn', response.user);
                router.push('/inicio');
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

    public async logout(): Promise<void> {
        location.href = '/api/auth/v1/redirect-to-logout';
    }
}
