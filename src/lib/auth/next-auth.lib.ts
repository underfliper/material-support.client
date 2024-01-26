import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { $fetch } from '../fetch/customFetch'
import { AuthenticatedUser } from '@/types/auth.types'

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Имя пользователя', type: 'text' },
        password: { label: 'Пароль', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password)
          return Promise.reject({
            message: 'Все поля должны быть заполнены',
          })

        try {
          const { data: user } = await $fetch.post<AuthenticatedUser>(
            '/Authentication/login',
            credentials,
          )

          return user as User
        } catch (e: any) {
          return Promise.reject({
            message: e.message,
          })
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User

      return token
    },
    async session({ session, token }) {
      session.user = token.user as User

      return session
    },
  },
}
