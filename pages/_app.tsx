import type { AppProps } from 'next/app'
import {parseCookies} from "nookies";

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
      try {
        const { token } = parseCookies(ctx)

        const userData = await AuthApi.me(token);
        store.dispatch(setUserData(userData))
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
