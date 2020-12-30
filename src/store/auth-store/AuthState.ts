import { RequestStatus } from '../../models/auth/RequestStatus';

export default class AuthState {
    public loginRequestStatus: RequestStatus = RequestStatus.IN_PROGRESS;
    public loggedIn: boolean = false;
    public email: string | null = null;
    public fullName: string | null = null;
    public givenName: string | null = null;
    public surname: string | null = null;
    public username: string | null = null;
    public roles: string[] = [];
}
