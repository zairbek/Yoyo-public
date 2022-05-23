import axios from "axios";
import {AuthWithPhoneConfirmDto, AuthWithPhoneDto} from "./types";

const instance = axios.create({
  baseURL: 'http://ebazar.loc'
})

const authInstance = axios.create({
  baseURL: 'http://ebazar.loc',
  headers: {
    'client-id': 4,
    'client-secret': 'h3YTAKTNgEE5yOofhout79Gnx7h6aVvgIFlHKHka'
  }
})

export const AuthApi = {
  async phone(dto: AuthWithPhoneDto) {
    const { data } = await authInstance.post('/api/v1/auth/send', dto)
    return data;
  },

  async phoneConfirm(dto: AuthWithPhoneConfirmDto) {
    const { data } = await authInstance.post('/api/v1/auth/sign-in', dto)
    return data;
  }
}
