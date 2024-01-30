'use client'
import type { UrlObject } from 'url'
import type { FC, MouseEventHandler, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import styles from '../navigation.module.scss'

export interface NavigationItemProps extends PropsWithChildren {
  url: string | UrlObject
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

  return (
    <li className={cn(className, styles.item, { active: url === pathname })}>
      <Link href={url} onClick={onClick}>
        {children}
      </Link>
    </li>
  )
}
export default NavigationItem
