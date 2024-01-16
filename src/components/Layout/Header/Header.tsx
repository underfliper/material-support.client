import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/Container/Container'

import logo from '@/assets/img/logo.svg'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/" className={styles.link}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Логотип"
            width={379}
            priority
          />
        </Link>
        <div className={styles.burger}></div>
      </Container>
    </header>
  )
}

export default Header
