'use client'
import type { FC, MouseEventHandler, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import styles from '../navigation.module.scss'

export interface NavigationItemProps extends PropsWithChildren {
  url: string
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const NavigationItem: FC<NavigationItemProps> = ({
  className,
  url,
  onClick,
  children,
}) => {
  const pathname = usePathname()

  const isUrlActive = (currentUrl: string, targetUrl: string) => {
    if (currentUrl === targetUrl) return true

    if (currentUrl.startsWith(`${targetUrl}/`)) return true

    return false
  }

  return (
    <li
      className={cn(className, styles.item, {
        active: isUrlActive(pathname, url),
      })}>
      <Link href={url} onClick={onClick}>
        {children}
      </Link>
    </li>
  )
}
export default NavigationItem
