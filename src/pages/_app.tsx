import 'src/styles/globals.css'
import 'src/styles/text-glitch.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
