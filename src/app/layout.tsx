import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
