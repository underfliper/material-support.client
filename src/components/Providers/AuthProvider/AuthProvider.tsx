import { type FC, type PropsWithChildren, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { UserRole } from '@/types/auth.types'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session, status } = useSession()

  const checkTokenExpire = (token: string) => {
    const { exp } = jwtDecode<{ exp: number }>(token)
    const expDate = new Date(exp * 1000)
    const nowDate = new Date()

    return expDate < nowDate
  }

  useEffect(() => {
    if (status === 'loading' || status === 'unauthenticated') return

    if (!session || !session.user) return

    const { user } = session

    if (checkTokenExpire(user.accessToken)) {
      signOut({ redirect: false })
      localStorage.removeItem('accessToken')
      toast.info('Истекло время сессии. Войдите в аккаунт чтобы продолжить.')
      router.push('/auth/signin')
    }

    localStorage.setItem('accessToken', user.accessToken)

    if (pathname === '/') {
      if (user.role === UserRole.Student) router.push('/profile')

      if (user.role === UserRole.Admin || user.role === UserRole.Moderator)
        router.push('/manage')
    }

    return
  }, [session, status, pathname])

  return children
}

export default AuthProvider
