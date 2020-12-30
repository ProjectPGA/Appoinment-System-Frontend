import { Getters } from 'vuex-smart-module';

import { RequestStatus } from '../../models/auth/RequestStatus';

import AuthState from './AuthState';

export default class AuthGetters extends Getters<AuthState> {
    public get isLoginInProgress(): boolean {
        return this.state.loginRequestStatus === RequestStatus.IN_PROGRESS;
    }
    public get isLoggedOut(): boolean {
        return !this.state.loggedIn;
    }
    public get isLoginFailed(): boolean {
        return this.state.loginRequestStatus === RequestStatus.FAILURE;
    }
    public get hasDataWriterRole(): boolean {
        return this.state.roles.includes('DataWriter');
    }
}
