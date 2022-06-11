import {
  AuthResponse,
  AuthWithEmailConfirmDto,
  AuthWithEmailDto,
  AuthWithPhoneConfirmDto,
  AuthWithPhoneDto,
  InitAuthResponse
} from "./types";
import {AxiosInstance, AxiosResponseHeaders} from "axios";

export const AuthApi = (instance: AxiosInstance) => ({
  async phone(dto: AuthWithPhoneDto): Promise<InitAuthResponse> {
    const { data } = await instance.post<AuthWithPhoneDto, { data: InitAuthResponse }>('/api/v1/auth/send', dto)
    return data;
  },

  async phoneConfirm(dto: AuthWithPhoneConfirmDto): Promise<AuthResponse> {
    const { data } = await instance.post<AuthWithPhoneConfirmDto, {data: AuthResponse}>('/api/v1/auth/sign-in', dto)
    return data;
  },

  async email(dto: AuthWithEmailDto) {
    const { data } = await instance.post('/api/v1/auth/send', dto)
    return data;
  },

  async emailConfirm(dto: AuthWithEmailConfirmDto) {
    const { data } = await instance.post('/api/v1/auth/sign-in', dto)
    return data;
  },

  async refreshToken(refreshToken: string): Promise<{data: AuthResponse, headers: AxiosResponseHeaders}> {
    const { data, headers } = await instance.post<string, {data: AuthResponse, headers: AxiosResponseHeaders}>('/api/v1/auth/refresh-token', {}, {
      headers: {
        Cookie: `refresh-token=${refreshToken}`
      }
    })
    return {
      data,
      headers
    };
  },
})
