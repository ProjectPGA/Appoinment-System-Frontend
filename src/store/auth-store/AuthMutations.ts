import { Mutations } from 'vuex-smart-module';

import { RequestStatus } from '../../models/auth/RequestStatus';

import AuthState from './AuthState';
import { User } from '../../models/user/User';

export default class AuthMutations extends Mutations<AuthState> {
  public setUserNotisLogged(): void {
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

  public setRegisterInProgress(): void {
    this.state.isLoading = true;
  }

  public unsetRegisterInProgress(): void {
    this.state.isLoading = false;
  }

  public enableRegisterProcess(): void {
    this.state.isRegisterProcess = true;
  }

  public disableRegisterProcess(): void {
    this.state.isRegisterProcess = false;
  }

  public setInvitationalCode(code: string): void {
    this.state.invitationalCode = code;
  }

  public removeInvitationalCode(): void {
    this.state.invitationalCode = null;
  }

  public setInvitationalCodeError(): void {
    this.state.isInvitationalCodeError = true;
  }

  public disableInvitationalCodeError(): void {
    this.state.isInvitationalCodeError = false;
  }

  public setRegisterProcessError(): void {
    this.state.isRegisterProcessError = true;
  }

  public disableRegisterProcessError(): void {
    this.state.isRegisterProcessError = false;
  }
}
