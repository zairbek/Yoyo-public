import type { AppProps } from 'next/app'
import {parseCookies, setCookie} from "nookies";

import {wrapper} from "../store/store";
import {AuthApi} from "../utils/api";
import {setUserData} from "../store/slices/auth";
import {isMobile} from "../libs/uaParser";

import '../styles/globals.scss'

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
        if (cookies.token) {
          const userData = await AuthApi.me(cookies.token);

          if (! userData && cookies['refresh-token']) {
            const {data, headers} = await AuthApi.refreshToken(cookies['refresh-token'])
            if (data) {
              const token = data.token.token_type + ' ' + data.token.access_token
              ctx.res?.setHeader('set-cookie', headers['set-cookie'])
              setCookie(ctx, 'token', token, {
                maxAge: data.token.expires_in,
                path: '/',
              });

              const userData = await AuthApi.me(token);
              store.dispatch(setUserData(userData))
            }
          } else {
            store.dispatch(setUserData(userData))
          }
        }

      } catch (err) {
        console.log(err)
      }

      return {
        pageProps: {
          ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
          isMobile: isMobile(ctx.req)
        }
      }
    }
)

export default wrapper.withRedux(App)
