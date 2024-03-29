import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../auth/next-auth.lib'
import { ApiError, type ApiResponse } from '@/types/api.types'

class CustomFetch {
  private API_URL = process.env.NEXT_PUBLIC_API_URL as string

  constructor(private defaultHeaders: HeadersInit = {}) {}

  async getAccessToken(): Promise<string | null> {
    const session = await getServerSession(nextAuthOptions).catch(() => {
      return null
    })

    if (!session) {
      if (!localStorage) return null

      return localStorage.getItem('accessToken')
    }

    return session?.user?.accessToken ?? null
  }

  private async request<T>(
    path: string,
    isAuth: boolean,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    const url = `${this.API_URL}${path}`

    const authorizationHeader: HeadersInit = isAuth
      ? { Authorization: `Bearer ${await this.getAccessToken()}` }
      : {}

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...this.defaultHeaders,
          ...authorizationHeader,
          ...options?.headers,
        },
        ...options,
      })

      if (!response.ok) {
        const responseText = await response.text()
        throw new ApiError(
          responseText ?? 'Что-то пошло не так...',
          response.status,
        )
      }

      const data = await response.json()

      return {
        data,
        status: response.status,
      }
    } catch (error) {
      throw error
    }
  }

  get<T>(
    path: string,
    isAuth: boolean = false,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(path, isAuth, { ...options, method: 'GET' })
  }

  post<T>(
    path: string,
    body?: any,
    isAuth: boolean = false,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(path, isAuth, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  put<T>(
    path: string,
    body?: any,
    isAuth: boolean = false,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(path, isAuth, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }

  delete<T>(
    path: string,
    isAuth: boolean = false,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(path, isAuth, { ...options, method: 'DELETE' })
  }
}

export const $fetch = new CustomFetch()
