import type { FC } from 'react'
import { userService } from '@/services/student.service'
import Contacts from './Contacts'
import PersonalInformation from './PersonalInformation'

import styles from './profileAbout.module.scss'

interface ProfileAboutProps {
  editMode?: boolean
}

const ProfileAbout: FC<ProfileAboutProps> = async ({ editMode = false }) => {
  const student = await userService.getStudent()

  if (!student) return null

  const { contacts, ...personalInfo } = student

  return (
    <div className={styles.wrapper}>
      <PersonalInformation data={personalInfo} editMode={editMode} />
      <Contacts data={contacts} editMode={editMode} />
    </div>
  )
}

export default ProfileAbout
