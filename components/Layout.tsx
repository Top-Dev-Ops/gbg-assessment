import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = '' }: Props) => (
  <div className="text-center">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <div className="bg-stack-1 max-w-7xl min-h-screen relative flex flex-row w-full justify-center items-start mx-auto">
      {children}
    </div>
  </div>
)

export default Layout
