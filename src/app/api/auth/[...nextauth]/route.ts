import NextAuth from 'next-auth/next'
import { nextAuthOptions } from '@/lib/auth/next-auth.lib'

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
