import { UserRoles } from './UserData';

export interface User {
    email: string;
    name: string;
    roles: UserRoles[];
    password: string;
}
