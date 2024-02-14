import type { FC, PropsWithChildren } from 'react'
import Container from '@/components/Container/Container'
import Sidebar from '../Sidebar/Sidebar'

import styles from './pageLayout.module.scss'

interface PageLayoutProps extends PropsWithChildren {
  title: string
}

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <Container className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.layout}>
        <Sidebar className={styles.sidebar} />
        <div className={styles.content}>{children}</div>
      </div>
    </Container>
  )
}

export default PageLayout
