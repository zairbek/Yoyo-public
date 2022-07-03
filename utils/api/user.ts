import {AxiosInstance} from "axios";
import {UserResponse} from "./types";

export const UserApi = (instance: AxiosInstance) => ({
  async me(token?: string): Promise<UserResponse> {
    if (token) {
      const { data } = await instance.get('/api/v1/account', {
        headers: {
          Authorization: token
        }
      })
      return data;
    }

    const { data } = await instance.get('/api/v1/account')
    return data;
  }
})
