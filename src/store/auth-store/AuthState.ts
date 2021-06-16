import { RequestStatus } from '../../models/auth/RequestStatus';

export default class AuthState {
  public roles: string[] = [];
  public isLogged: boolean = false;
  public isLoading: boolean = false;
  public isRegisterProcess: boolean = false;
  public name: string | null = null;
  public email: string | null = null;
  public loginRequestStatus: RequestStatus = RequestStatus.IN_PROGRESS;
  public isInvitationalCodeError: boolean = false;
  public invitationalCode: string | null = null;
  public isRegisterProcessError: boolean = false;
}
