import { userService } from '@/services/student.service'
import Contacts from './Contacts'
import PersonalInformation from './PersonalInformation'

import styles from './profileAbout.module.scss'

const ProfileAbout = async () => {
  const student = await userService.getStudent()

  if (!student) return null

  const { contacts, ...personalInfo } = student

  return (
    <div className={styles.wrapper}>
      <PersonalInformation data={personalInfo} />
      <Contacts data={contacts} />
    </div>
  )
}

export default ProfileAbout
