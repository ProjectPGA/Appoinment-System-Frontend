import { Actions } from 'vuex-smart-module';

import AuthState from './AuthState';
import AuthGetters from './AuthGetters';
import AuthMutations from './AuthMutations';

import { login, renewToken } from '../../webservices/AuthWebservice';

import { LoginRequest } from '../../webservices/models/auth/LoginRequest';
import { TokenResponse } from '../../webservices/models/auth/TokenResponse';
import { UserData } from '@/models/user/UserData';

export default class AuthActions extends Actions<
    AuthState,
    AuthGetters,
    AuthMutations,
    AuthActions
> {
    public async renewToken(): Promise<void> {
        try {
            const refreshToken: string | null = localStorage.getItem(
                'refreshToken'
            );

            if (refreshToken !== null) {
                const response: TokenResponse = await renewToken({
                    token: refreshToken,
                });

                if (response.accessToken !== null) {
                    this.saveJTWAccessToken(response.accessToken);
                } else {
                    // TODO. Reference logout when implemented
                }
            } else {
                // TODO. Reference logout when implemented
            }
        } catch (exception) {
            // TODO. Reference logout when implemented
        }
    }

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
                this.commit('setIsLogged', response.user);
                this.saveJTWTokens(response.accessToken, response.refreshToken);
            } else {
                this.commit('setUserNotisLogged', null);
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

    public enableRegisterProcess(): void {
        this.commit('enableRegisterProcess', null);
    }

    public disableRegisterProcess(): void {
        this.commit('disableRegisterProcess', null);
    }

    public saveJTWTokens(
        accessToken: string | null,
        refreshToken: string | null
    ): void {
        if (accessToken !== null && refreshToken !== null) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        }
    }

    public saveJTWAccessToken(accessToken: string | null): void {
        if (accessToken !== null) {
            localStorage.setItem('accessToken', accessToken);
        }
    }
}
