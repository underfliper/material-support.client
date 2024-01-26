'use client'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'
import { MdErrorOutline } from 'react-icons/md'

import styles from './signin.module.scss'

interface SignInProps {
  callbackUrl?: string
}

const FormSchema = z.object({
  username: z.string().min(1, 'Поле должно быть заполнено'),
  password: z.string().min(1, 'Поле должно быть заполнено'),
})

type InputType = z.infer<typeof FormSchema>

const SignIn = (props: SignInProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  })
  const [error, setError] = useState<string | undefined | null>()
  const router = useRouter()

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: data.username,
      password: data.password,
    })

    if (!result?.ok) {
      setError(result?.error)
      return
    }

    router.push(props.callbackUrl ? props.callbackUrl : '/')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Войти в личный кабинет</h1>
      <Field
        label="Имя пользователя"
        {...register('username')}
        error={errors.username?.message}
        autoComplete="username"
      />
      <Field
        label="Пароль"
        type="password"
        {...register('password')}
        error={errors.password?.message}
        autoComplete="current-password"
      />
      {error && !isSubmitting && (
        <span className={styles.error}>
          <MdErrorOutline />
          {error}
        </span>
      )}
      <Button
        className={styles.button}
        disabled={isSubmitting}
        isLoading={isSubmitting}
        type="submit">
        Войти
      </Button>
    </form>
  )
}

export default SignIn
