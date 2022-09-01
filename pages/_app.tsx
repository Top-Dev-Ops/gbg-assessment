import { AppProps } from 'next/app'
import { useEffect } from 'react'

import '../styles/globals.css'

import { ContextProvider } from '../contexts/context'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    globalThis.document.documentElement.classList.add('dark')
  }, [])

  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp