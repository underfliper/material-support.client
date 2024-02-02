'use client'
import { useEffect, type FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import Container from '@/components/Container/Container'
import Button from '@/components/ui/Button/Button'

import styles from './signout.module.scss'

const SignOut = () => {
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    signOut()
    router.replace('/')
  }

  const handleReturnBack = () => {
    router.back()
  }

  useEffect(() => {
    if (!session && status !== 'loading') {
      router.back()
    }
  }, [session, status, router])

  return (
    <Container className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Выход</h1>
        <p>Вы уверены, что хотите выйти?</p>
        <div className={styles.controls}>
          <Button type="submit">Выйти</Button>
          <Button type="button" variant="light" onClick={handleReturnBack}>
            Назад
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default SignOut
