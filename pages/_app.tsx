import type { AppProps } from 'next/app'
import {parseCookies, setCookie} from "nookies";

import {wrapper} from "../store/store";
import {Api} from "../utils/api";
import {setUserData} from "../store/slices/auth";

import '../styles/globals.scss'
import {AxiosError} from "axios";

function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

App.getInitialProps = wrapper.getInitialAppProps(
  store =>
    async ({ctx, Component}) => {
      const cookies = parseCookies(ctx)
      try {
        const userData = await Api(ctx).user.me();
        store.dispatch(setUserData(userData))
      } catch (err) {

        if (err instanceof AxiosError && err.response.status === 401) {
          try {
            const {data, headers} = await Api(ctx).auth.refreshToken(cookies['refresh-token'])
            if (data) {
              const token = data.token.token_type + ' ' + data.token.access_token
              ctx.res?.setHeader('set-cookie', headers['set-cookie'])
              setCookie(ctx, 'token', token, {
                maxAge: data.token.expires_in,
                path: '/',
              });

              const userData = await Api(ctx).user.me(token);
              store.dispatch(setUserData(userData))
            }
          } catch (err) {
            console.log('refresh-token', err)
          }
        } else {
          console.log('me', err)
        }
      }

      return {
        pageProps: {
          ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
        }
      }
    }
)

export default wrapper.withRedux(App)
