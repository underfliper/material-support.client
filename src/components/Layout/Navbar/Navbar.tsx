'use client'
import type { Session, User } from 'next-auth'
import { UserRole } from '@/types/auth.types'
import { useSession } from 'next-auth/react'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { adminNavbar, publicNavbar, studentNavbar } from './navbar.data'
import cn from 'classnames'
import Navigation from '@/components/ui/Navigation/Navigation'

import styles from './navbar.module.scss'

interface NavbarProps {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const Navbar: FC<NavbarProps> = ({ isActive, setIsActive }) => {
  const { data: session, status } = useSession()

  useEffect(() => {
    window.onresize = () => {
      setIsActive(false)
    }
  })

  const getNavbarItems = (session: Session | null) => {
    if (session) {
      const { role } = session.user as User

      if (role === UserRole.Student) return studentNavbar

      if (role === UserRole.Moderator || role === UserRole.Admin)
        return adminNavbar
    }

    return publicNavbar
  }

  if (status === 'loading') return null

  return (
    <>
      <Navigation
        className={cn(styles.nav, { [`${styles.active}`]: isActive })}
        listClassName={styles.list}
        endContent={
          <button
            className={styles.toggle}
            title="Открыть навигацию"
            onClick={() => setIsActive((prev) => !prev)}>
            <span className={styles.burger}></span>
          </button>
        }>
        {getNavbarItems(session).map((item) => (
          <Navigation.Item
            className={styles.item}
            key={item.url}
            url={item.url}
            onClick={() => setIsActive(false)}>
            {item.text}
            <span className={styles.separator}></span>
          </Navigation.Item>
        ))}
      </Navigation>
    </>
  )
}

export default Navbar
