'use client'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container/Container'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import logo from '@/assets/img/logo.svg'

import styles from './header.module.scss'

const Header = () => {
  const [navbarActive, setNavbarActive] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/" className={styles.link}>
          <Image className={styles.logo} src={logo} alt="Логотип" priority />
        </Link>
        <Navbar isActive={navbarActive} setIsActive={setNavbarActive} />
      </Container>
    </header>
  )
}

export default Header
