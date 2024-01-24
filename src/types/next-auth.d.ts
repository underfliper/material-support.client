import 'next-auth'
import { AuthenticatedUser, UserRole } from './auth.types'

declare module 'next-auth' {
  interface Session {
    user?: User
  }

  interface User {
    id: number
    role: UserRole
    accessToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: AuthenticatedUser
  }
}
