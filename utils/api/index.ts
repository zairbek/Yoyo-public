import axios from "axios";
import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookie, {parseCookies} from 'nookies';

import {UserApi} from "./user";
import {AuthApi} from "./auth";

export type ApiReturnType = {
  auth: ReturnType<AuthApi>
  user: ReturnType<UserApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookie.get(ctx) : parseCookies();
  const token = cookies.token ?? null;

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      'client-id': String(process.env.NEXT_PUBLIC_CLIENT_ID),
      'client-secret': String(process.env.NEXT_PUBLIC_CLIENT_SECRET),
      'X-Access-Token': token,
    },
  })

  return {
    auth: AuthApi(instance),
    user: UserApi(instance)
  }
}
