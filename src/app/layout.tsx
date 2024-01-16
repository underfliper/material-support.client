import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Layout/Header/Header'

import './globals.scss'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Материальная поддержка КНИТУ',
    default: 'Материальная поддержка КНИТУ',
  },
  description:
    'Данная система предназначена для электронной подачи заявлений на выделение материальной помощи студентов Казанского национального исследователького технологического университета.',
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
      { url: '/icons/apple-touch-icon-57x57.png', sizes: '57x57' },
      { url: '/icons/apple-touch-icon-60x60.png', sizes: '60x60' },
      { url: '/icons/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/icons/apple-touch-icon-76x76.png', sizes: '76x76' },
      { url: '/icons/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/icons/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/icons/apple-touch-icon-144x144.png', sizes: '144x144' },
      { url: '/icons/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/icons/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
