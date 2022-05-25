import axios, {AxiosResponse} from "axios";
import {ErrorResponse, InternalServerError, ValidationError} from "./errors";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'client-id': String(process.env.NEXT_PUBLIC_CLIENT_ID),
    'client-secret': String(process.env.NEXT_PUBLIC_CLIENT_SECRE)
  }
})


const errorInterceptor = (({  response  }: { response:  AxiosResponse<string> }) => {
  if (response.status  ===  422) {
    return  Promise.reject(new  ValidationError(response.data, response.status));
  }

  if (response.status  ===  500) {
    return  Promise.reject(new  InternalServerError (response.data, response.status));
  }

  return new ErrorResponse(response.data, response.status);
})


instance.interceptors.response.use(
  (response:  AxiosResponse<any>) =>  response,
  errorInterceptor
);
authInstance.interceptors.response.use(
  (response:  AxiosResponse<any>) =>  response,
  errorInterceptor
);
