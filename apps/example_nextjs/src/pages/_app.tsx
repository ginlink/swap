import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Providers } from '@/Providers'
import { ResetCSS } from '@ginlink/uilib'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

function MyApp(props: AppProps) {
  return (
    <Providers>
      <ResetCSS />
      <App {...props} />
    </Providers>
  )
}

export default MyApp
