import {AxiosInstance} from "axios";

export const UserApi = (instance: AxiosInstance) => ({
  async me(token?: string) {
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
