'use client'
import type { StudentContacts } from '@/types/student.types'
import { useState, type FC } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { userService } from '@/services/student.service'
import { toast } from 'react-toastify'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'

import styles from './profileAbout.module.scss'

interface ContactsProps {
  data: StudentContacts
  editMode?: boolean
}

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

const FormSchema = z.object({
  phone: z.string().regex(phoneRegex, 'Неверный формат номера телефона.'),
  email: z.string().email('Неверный адрес электронной почты.'),
})

type InputType = z.infer<typeof FormSchema>

const Contacts: FC<ContactsProps> = ({ data, editMode }) => {
  const [defaultValues, setDefaultValues] = useState<StudentContacts>(data)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  })

  const watchedValues = watch()

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await userService.editContacts(data)
    if (result) setDefaultValues(result)

    toast.success('Данные успешно сохранены!')
  }

  return (
    <div className={styles.contacts}>
      <h2>Контактная информация</h2>
      <form
        className={styles.contacts_fields}
        onSubmit={handleSubmit(onSubmit)}>
        <Field
          className={styles.contacts_field}
          label="Электронная почта"
          {...register('email')}
          defaultValue={data.email}
          error={errors.email?.message}
          required
          disabled={!editMode}
        />
        <Field
          className={styles.contacts_field}
          label="Номер телефона"
          {...register('phone')}
          defaultValue={data.phone}
          error={errors.phone?.message}
          required
          disabled={!editMode}
        />
        {(watchedValues.email !== defaultValues.email ||
          watchedValues.phone !== defaultValues.phone) && (
          <div className={styles.contacts_controls}>
            <Button
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}>
              Сохранить
            </Button>
            <Button
              type="button"
              variant="light"
              onClick={() => reset(defaultValues)}>
              Отменить
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Contacts
