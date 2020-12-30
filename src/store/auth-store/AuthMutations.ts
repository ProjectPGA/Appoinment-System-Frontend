import { Mutations } from 'vuex-smart-module';

import { RequestStatus } from '../../models/auth/RequestStatus';

import AuthState from './AuthState';
import { User } from '../../models/user/User';

export default class AuthMutations extends Mutations<AuthState> {
    public setUserNotLoggedIn(): void {
        this.state.loggedIn = false;
        this.state.email = null;
        this.state.name = null;
        this.state.roles = [];
        this.state.loginRequestStatus = RequestStatus.PENDING;
    }

    public setLoginInProgress(): void {
        this.state.loginRequestStatus = RequestStatus.IN_PROGRESS;
    }

    public setLoggedIn(user: User): void {
        this.state.loggedIn = true;
        this.state.name = user.name;
        this.state.email = user.email;
        this.state.roles = user.roles;
        this.state.loginRequestStatus = RequestStatus.SUCCESS;
    }

    public setLoginFailed(): void {
        this.state.loggedIn = false;
        this.state.email = null;
        this.state.name = null;
        this.state.roles = [];
        this.state.loginRequestStatus = RequestStatus.FAILURE;
    }
}
