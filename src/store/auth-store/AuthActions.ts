import { Actions } from 'vuex-smart-module';

import AuthState from './AuthState';
import AuthGetters from './AuthGetters';
import AuthMutations from './AuthMutations';

import {
    login,
    logout,
    renewToken,
    checkUserToken,
    checkInvitationalCode,
} from '../../webservices/AuthWebservice';

import { LoginRequest } from '../../webservices/models/auth/LoginRequest';
import { TokenResponse } from '../../webservices/models/auth/TokenResponse';

import { UserData } from '@/models/user/UserData';
import { AuthTockens } from '@/models/auth/AuthTockens';

import router from '@/router';

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
                    this.dispatch('saveJTWAccessToken', response.accessToken);
                } else {
                    this.commit('setUserNotisLogged', null);
                }
            } else {
                this.commit('setUserNotisLogged', null);
            }
        } catch (exception) {
            // TODO. Show error
            this.commit('setUserNotisLogged', null);
        }
    }

    public async checkUserToken(): Promise<void> {
        try {
            this.commit('setLoginInProgress', null);

            const refreshToken: string | null = localStorage.getItem(
                'refreshToken'
            );

            if (refreshToken !== null) {
                const response: UserData = await checkUserToken({
                    token: refreshToken,
                });
                if (response.user !== null) {
                    this.commit('setIsLogged', response.user);
                } else {
                    this.commit('setUserNotisLogged', null);
                }
            } else {
                this.commit('setUserNotisLogged', null);
            }
        } catch (exception) {
            // TODO. Show error
            this.commit('setLoginFailed', null);
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
                this.dispatch('saveJTWTokens', {
                    accessToken: response.accessToken,
                    refreshToken: response.refreshToken,
                });
            } else {
                this.commit('setUserNotisLogged', null);
                return false;
            }
            return true;
        } catch (exception) {
            // TODO. Show error
            this.commit('setLoginFailed', null);
            return false;
        }
    }

    public async logout(): Promise<void> {
        try {
            const refreshToken: string | null = localStorage.getItem(
                'refreshToken'
            );
            if (refreshToken !== null) {
                await logout({
                    refreshToken,
                });

                localStorage.removeItem('refreshToken');

                this.commit('setUserNotisLogged', null);
            } else {
                this.commit('setUserNotisLogged', null);
            }
        } catch (exception) {
            // TODO: show error
        }
    }

    public async checkInvitationalCode(invitationCode: string): Promise<void> {
        try {
            this.commit('disableInvitationalCodeError', null);

            await checkInvitationalCode({ invitationCode });

            this.dispatch('enableRegisterProcess', null);

            router.push('/register');
        } catch (exception) {
            this.commit('setInvitationalCodeError', null);
        }
    }

    public enableRegisterProcess(): void {
        this.commit('enableRegisterProcess', null);
    }

    public disableRegisterProcess(): void {
        this.commit('disableRegisterProcess', null);
    }

    public saveJTWTokens(authTockens: AuthTockens): void {
        if (
            authTockens.accessToken !== null &&
            authTockens.refreshToken !== null
        ) {
            localStorage.setItem('accessToken', authTockens.accessToken);
            localStorage.setItem('refreshToken', authTockens.refreshToken);
        }
    }

    public saveJTWAccessToken(accessToken: string | null): void {
        if (accessToken !== null) {
            localStorage.setItem('accessToken', accessToken);
        }
    }
}
