import { type NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import type { JWT } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { UserRole } from './types/auth.types'

const STUDENT_ROUTES = ['/profile', '/apply']
const ADMIN_ROUTES = ['/manage', '/applications']

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const { pathname } = req.nextUrl
    const { user } = req.nextauth.token as JWT
    const isStudentRoute = STUDENT_ROUTES.some((route) =>
      pathname.startsWith(route),
    )
    const isAdminRoute = ADMIN_ROUTES.some((route) =>
      pathname.startsWith(route),
    )

    if (
      isStudentRoute &&
      (user.role === UserRole.Admin || user.role === UserRole.Moderator)
    ) {
      return NextResponse.redirect(new URL('/manage', req.url))
    }

    if (isAdminRoute && user.role === UserRole.Student) {
      return NextResponse.redirect(new URL('/profile', req.url))
    }
  },
  {
    pages: { signIn: '/auth/signin', signOut: '/auth/signout' },
    callbacks: {
      authorized: async ({ token }) => !!token,
    },
  },
)

export const config = {
  matcher: [
    '/profile/:path*',
    '/apply',
    '/manage/:path*',
    '/applications/:path*',
  ],
}
