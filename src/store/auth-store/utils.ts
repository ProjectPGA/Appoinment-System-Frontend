import { AuthUser } from '@/models/auth/AuthUser';

export const emptyUser: AuthUser = {
    id: 0,
    name: '',
    admin: false,
    email: '',
};
