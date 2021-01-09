import { Mutations } from 'vuex-smart-module';

import { RequestStatus } from '../../models/auth/RequestStatus';

import AuthState from './AuthState';
import { User } from '../../models/user/User';

export default class AuthMutations extends Mutations<AuthState> {
    public setUserNotLoggedIn(): void {
        this.state.roles = [];
        this.state.name = null;
        this.state.email = null;
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
        this.state.name = user.name;
        this.state.isLoading = false;
        this.state.roles = user.roles;
        this.state.email = user.email;
        this.state.loginRequestStatus = RequestStatus.SUCCESS;
    }

    public setLoginFailed(): void {
        this.state.roles = [];
        this.state.name = null;
        this.state.email = null;
        this.state.isLogged = false;
        this.state.isLoading = false;
        this.state.loginRequestStatus = RequestStatus.FAILURE;
    }
}
