'use client'
import type { Session, User } from 'next-auth'
import { type FC, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { UserRole } from '@/types/auth.types'
import { adminSidebar, studentSidebar } from './sidebar.data'
import cn from 'classnames'
import Navigation from '@/components/ui/Navigation/Navigation'

import styles from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const [isActive, setIsActive] = useState<boolean>(false)
  const navRef = useRef<HTMLElement>(null)
  const navToggleRef = useRef<HTMLButtonElement>(null)

  const getCurrentItem = (session: Session | null) => {
    if (session) {
      const { role } = session.user as User

      if (role === UserRole.Student)
        return studentSidebar.find((item) => item.url === pathname)?.content

      if (role === UserRole.Moderator || role === UserRole.Admin)
        return adminSidebar.find((item) => item.url === pathname)?.content
    }

    return null
  }

  const getSidebarItems = (session: Session | null) => {
    if (session) {
      const { role } = session.user as User

      if (role === UserRole.Student) return studentSidebar

      if (role === UserRole.Moderator || role === UserRole.Admin)
        return adminSidebar
    }

    return []
  }

  useEffect(() => {
    if (!isActive) return

    const handleClickOutside = (event: MouseEvent) => {
      const { target } = event

      if (
        navToggleRef.current &&
        navToggleRef.current.contains(target as HTMLElement)
      ) {
        return
      }

      if (navRef.current && !navRef.current.contains(target as HTMLElement)) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isActive])

  if (status === 'loading') return null

  return (
    <aside className={cn(className, styles.wrapper)}>
      <button
        className={styles.toggle}
        onClick={() => setIsActive((prev) => !prev)}
        ref={navToggleRef}>
        {getCurrentItem(session) || 'Навигация'}
      </button>
      <Navigation
        className={cn(styles.nav, { [styles.active]: isActive })}
        listClassName={styles.list}
        ref={navRef}>
        {getSidebarItems(session).map((item) => (
          <Navigation.Item
            key={item.url}
            className={styles.item}
            url={item.url}
            onClick={() => setIsActive(false)}>
            {item.content}
          </Navigation.Item>
        ))}
      </Navigation>
    </aside>
  )
}

export default Sidebar
