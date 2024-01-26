import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import SignIn from '@/components/Pages/SignIn/SignIn'

interface PageProps {
  searchParams: {
    callbackUrl?: string
  }
}

export const metadata: Metadata = NO_INDEX_PAGE

export default function SignInPage({ searchParams }: PageProps) {
  return <SignIn callbackUrl={searchParams.callbackUrl} />
}
