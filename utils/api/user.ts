import {AxiosInstance} from "axios";

export const UserApi = (instance: AxiosInstance) => ({
  async me() {
    const { data } = await instance.get('/api/v1/account')
    return data;
  }
})
