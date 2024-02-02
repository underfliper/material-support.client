'use client'
import type { FC, PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import AuthProvider from './AuthProvider/AuthProvider'

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </SessionProvider>
  )
}

export default Providers
