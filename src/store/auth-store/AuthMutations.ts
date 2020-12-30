import { Mutations } from 'vuex-smart-module';

import { RequestStatus } from '../../models/auth/RequestStatus';

import AuthState from './AuthState';
import { User } from '../../models/User';

export default class AuthMutations extends Mutations<AuthState> {
    public setUserNotLoggedIn(): void {
        this.state.loginRequestStatus = RequestStatus.PENDING;
        this.state.loggedIn = false;
        this.state.email = null;
        this.state.fullName = null;
        this.state.givenName = null;
        this.state.surname = null;
        this.state.username = null;
        this.state.roles = [];
    }

    public setLoginInProgress(): void {
        this.state.loginRequestStatus = RequestStatus.IN_PROGRESS;
    }

    public setLoggedIn(user: User): void {
        this.state.loginRequestStatus = RequestStatus.SUCCESS;
        this.state.loggedIn = true;
        this.state.email = user.email;
        this.state.fullName = user.fullName;
        this.state.givenName = user.givenName;
        this.state.surname = user.surname;
        this.state.username = user.username;
        this.state.roles = user.roles;
    }

    public setLoginFailed(): void {
        this.state.loginRequestStatus = RequestStatus.FAILURE;
        this.state.loggedIn = false;
        this.state.email = null;
        this.state.fullName = null;
        this.state.givenName = null;
        this.state.surname = null;
        this.state.username = null;
        this.state.roles = [];
    }
}
