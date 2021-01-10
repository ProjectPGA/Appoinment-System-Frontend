import { User } from './User';

export interface UserData {
    user: User | null;
}

export enum UserRoles {
    ADMIN = 'ADMIN',
    COMMON_USER = 'COMMON_USER',
}
