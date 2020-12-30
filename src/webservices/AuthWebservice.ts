import axios from 'axios';

import { apiPrefix, jsonHeaders } from './consts';

import { UserData } from '../models/UserData';
import { LoginRequest } from './models/auth/LoginRequest';

const baseUrl: string = apiPrefix('prisma/auth');

const api = axios.create({
    headers: { Pragma: 'no-cache' },
});

export const login: (params: LoginRequest) => Promise<void> = async params => {
    await axios.post(`${baseUrl}/login`, params, jsonHeaders);
    return;
};

export const getUserData: () => Promise<UserData> = async () => {
    const response = await api.get<UserData>(`${baseUrl}/login`);
    return response.data;
};
