import { Mutations } from 'vuex-smart-module';

import { RequestStatus } from '../../models/auth/RequestStatus';

import AuthState from './AuthState';
import { User } from '../../models/User';

export default class AuthMutations extends Mutations<AuthState> {
    public setUserNotisLogged(): void {
        this.state.roles = [];
        this.state.email = null;
        this.state.surname = null;
        this.state.username = null;
        this.state.fullName = null;
        this.state.givenName = null;
        this.state.isLogged = false;
        this.state.isLoading = false;
        this.state.loginRequestStatus = RequestStatus.PENDING;
    }

    public setLoginInProgress(): void {
        this.state.isLoading = true;
        this.state.loginRequestStatus = RequestStatus.IN_PROGRESS;
    }

    public setIsLogged(user: User): void {
        this.state.isLogged = true;
        this.state.isLoading = false;
        this.state.email = user.email;
        this.state.roles = user.roles;
        this.state.surname = user.surname;
        this.state.fullName = user.fullName;
        this.state.username = user.username;
        this.state.givenName = user.givenName;
        this.state.loginRequestStatus = RequestStatus.SUCCESS;
    }

    public setLoginFailed(): void {
        this.state.roles = [];
        this.state.email = null;
        this.state.surname = null;
        this.state.fullName = null;
        this.state.username = null;
        this.state.givenName = null;
        this.state.isLogged = false;
        this.state.isLoading = false;
        this.state.loginRequestStatus = RequestStatus.FAILURE;
    }
}
