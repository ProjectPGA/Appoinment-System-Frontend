export interface AuthUser {
    id: number;
    email: string;
    name: string;
    admin: boolean;
}

export const emptyUser: AuthUser = {
    id: 0,
    name: '',
    admin: false,
    email: '',
};
