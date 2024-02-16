import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import PageLayout from '@/components/Layout/PageLayout/PageLayout'

export const metadata: Metadata = NO_INDEX_PAGE

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout title="Личный кабинет">{children}</PageLayout>
}
