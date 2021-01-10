// @ts-ignore
import axios from 'axios';

import { apiPrefix, jsonHeaders } from './consts';

import { UserData } from '../models/user/UserData';
import { LoginRequest } from './models/auth/LoginRequest';

const baseUrl: string = apiPrefix('');

const api = axios.create({
    headers: { Pragma: 'no-cache' },
});

export const login: (
    params: LoginRequest
) => Promise<UserData> = async params => {
    const response = await axios.post<UserData>(
        `${baseUrl}/login`,
        params,
        jsonHeaders
    );
    return response.data;
};

// export const getUserData: () => Promise<UserData> = async () => {
//     const response = await api.get<UserData>(`${baseUrl}/login`);
//     return response.data;
// };
