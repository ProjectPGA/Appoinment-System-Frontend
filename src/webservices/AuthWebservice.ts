import axios from 'axios';

import { apiPrefix, jsonHeaders } from './consts';

import { UserData } from '../models/user/UserData';
import { LoginRequest } from './models/auth/LoginRequest';
import { TokenRequest } from './models/auth/TokenRequest';
import { TokenResponse } from './models/auth/TokenResponse';
import { LogoutRequest } from './models/auth/LogoutRequest';
import { InvitationalCodeRequest } from './models/auth/InvitationalCodeRequest';
import { CheckMailRequest } from './models/auth/CheckMailRequest';
import { RegisterRequest } from './models/auth/RegisterRequest';

const baseUrl: string = apiPrefix('/auth');

export const login: (params: LoginRequest) => Promise<UserData> =
  async params => {
    const response = await axios.post<UserData>(
      `${baseUrl}/login`,
      params,
      jsonHeaders
    );
    return response.data;
  };

export const logout: (params: LogoutRequest) => Promise<void> =
  async params => {
    await axios.post<void>(`${baseUrl}/logout`, params, jsonHeaders);
  };

export const checkUserToken: (params: TokenRequest) => Promise<UserData> =
  async params => {
    const response = await axios.post<UserData>(
      `${baseUrl}/userTokenCheck`,
      params,
      jsonHeaders
    );
    return response.data;
  };

export const renewToken: (params: TokenRequest) => Promise<TokenResponse> =
  async params => {
    const response = await axios.post<TokenResponse>(
      `${baseUrl}/token`,
      params,
      jsonHeaders
    );
    return response.data;
  };

export const checkInvitationalCode: (
  params: InvitationalCodeRequest
) => Promise<InvitationalCodeRequest> = async params => {
  const response = await axios.post<InvitationalCodeRequest>(
    `${baseUrl}/invitation`,
    params,
    jsonHeaders
  );
  return response.data;
};

export const deleteInvitationalCode: (
  params: InvitationalCodeRequest
) => Promise<InvitationalCodeRequest> = async params => {
  const headers: any = jsonHeaders.headers;
  const response = await axios.delete<InvitationalCodeRequest>(
    `${baseUrl}/invitation`,
    {
      headers,
      data: { invitationCode: params.invitationCode },
    }
  );
  return response.data;
};

export const checkIfEmailAlreadyExist: (
  params: CheckMailRequest
) => Promise<CheckMailRequest> = async params => {
  const response = await axios.post<CheckMailRequest>(
    `${baseUrl}/checkmail`,
    params,
    jsonHeaders
  );
  return response.data;
};

export const register: (params: RegisterRequest) => Promise<UserData> =
  async params => {
    const response = await axios.post<UserData>(
      `${baseUrl}/register`,
      params,
      jsonHeaders
    );
    return response.data;
  };
