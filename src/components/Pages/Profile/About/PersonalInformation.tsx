'use client'
import type { FC } from 'react'
import type { StudentPersonalInfo } from '@/types/student.types'
import { getBeautifulDate } from '@/utils/date.util'
import Field from '@/components/ui/Field/Field'

import styles from './profileAbout.module.scss'

interface PersonalInformationProps {
  data: StudentPersonalInfo
}

const PersonalInformation: FC<PersonalInformationProps> = ({ data }) => {
  return (
    <div className={styles.personalInformation}>
      <h2>Личная информация</h2>
      <div className={styles.personalInformation_fields}>
        <Field
          className={styles.personalInformation_field}
          label="Фамилия"
          name="surname"
          defaultValue={data.surname}
          disabled
        />
        <Field
          className={styles.personalInformation_field}
          label="Отчество"
          name="surname"
          defaultValue={data.lastname}
          disabled
        />
        <Field
          className={styles.personalInformation_field}
          label="Имя"
          name="surname"
          defaultValue={data.name}
          disabled
        />
        <Field
          className={styles.personalInformation_field}
          label="Группа"
          name="surname"
          defaultValue={data.group}
          disabled
        />
        <Field
          className={styles.personalInformation_field}
          label="Пол"
          name="surname"
          defaultValue={data.gender}
          disabled
        />
        <Field
          className={styles.personalInformation_field}
          label="Дата рождения"
          name="surname"
          defaultValue={getBeautifulDate(data.birthday)}
          disabled
        />
        <Field
          className={styles.personalInformation_field}
          label="Место рождения"
          name="surname"
          defaultValue={data.birthplace}
          disabled
        />
        <Field
          className={styles.personalInformation_field}
          label="Гражданство"
          name="surname"
          defaultValue={data.citizenship}
          disabled
        />
      </div>
    </div>
  )
}

export default PersonalInformation
