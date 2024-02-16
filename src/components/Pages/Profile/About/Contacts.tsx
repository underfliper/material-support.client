'use client'
import type { FC } from 'react'
import type { StudentContacts } from '@/types/student.types'
import Field from '@/components/ui/Field/Field'

import styles from './profileAbout.module.scss'

interface ContactsProps {
  data: StudentContacts
}

const Contacts: FC<ContactsProps> = ({ data }) => {
  return (
    <div className={styles.contacts}>
      <h2>Контактная информация</h2>
      <div className={styles.contacts_fields}>
        <Field
          className={styles.contacts_field}
          label="Фамилия"
          name="surname"
          defaultValue={data.email}
          disabled
        />
        <Field
          className={styles.contacts_field}
          label="Отчество"
          name="surname"
          defaultValue={data.phone}
          disabled
        />
      </div>
    </div>
  )
}

export default Contacts
