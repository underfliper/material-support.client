'use client'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container/Container'
import Button from '@/components/ui/Button/Button'

import styles from './notFound.module.scss'

const NotFound = () => {
  const router = useRouter()

  return (
    <Container>
      <h1 className={styles.title}>Страница не найдена</h1>
      <Button onClick={() => router.back()}>Вернуться назад</Button>
    </Container>
  )
}

export default NotFound
