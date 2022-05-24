import axios from "axios";
import {AuthWithEmailConfirmDto, AuthWithEmailDto, AuthWithPhoneConfirmDto, AuthWithPhoneDto} from "./types";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'client-id': String(process.env.NEXT_PUBLIC_CLIENT_ID),
    'client-secret': String(process.env.NEXT_PUBLIC_CLIENT_SECRE)
  }
})

export const AuthApi = {
  async phone(dto: AuthWithPhoneDto) {
    const { data } = await authInstance.post('/api/v1/auth/send', dto, {withCredentials: true})
    return data;
  },

  async phoneConfirm(dto: AuthWithPhoneConfirmDto) {
    const { data } = await authInstance.post('/api/v1/auth/sign-in', dto, {withCredentials: true})
    // const { data } = await authInstance.post('/api/v1/auth/sign-in', dto)
    return data;
  },

  async email(dto: AuthWithEmailDto) {
    const { data } = await authInstance.post('/api/v1/auth/send', dto, {withCredentials: true})
    return data;
  },

  async emailConfirm(dto: AuthWithEmailConfirmDto) {
    const { data } = await authInstance.post('/api/v1/auth/sign-in', dto, {withCredentials: true})
    // const { data } = await authInstance.post('/api/v1/auth/sign-in', dto)
    return data;
  }
}
