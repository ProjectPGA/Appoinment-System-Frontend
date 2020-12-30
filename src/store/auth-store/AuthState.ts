import { RequestStatus } from '../../models/auth/RequestStatus';

export default class AuthState {
    public loginRequestStatus: RequestStatus = RequestStatus.IN_PROGRESS;
    public loggedIn: boolean = false;
    public email: string | null = null;
    public name: string | null = null;
    public roles: string[] = [];
}
