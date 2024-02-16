import type { Student, StudentContacts } from '@/types/student.types'
import type { ApplicationShort } from '@/types/application.types'
import { $fetch } from '@/lib/fetch/customFetch'

class UserService {
  private API_ROUTE = '/student'
  private STUDENT_PATHS = {
    getStudent: `${this.API_ROUTE}/getstudent`,
    editContacts: `${this.API_ROUTE}/editcontacts`,
    getApplications: `${this.API_ROUTE}/getapplications`,
  }

  constructor() {}

  async getStudent() {
    try {
      const { data } = await $fetch.get<Student>(
        this.STUDENT_PATHS.getStudent,
        true,
      )

      return data
    } catch (error: any) {
      console.log(error)
    }
  }

  async editContacts(contacts: StudentContacts) {
    try {
      const { data } = await $fetch.put<StudentContacts>(
        this.STUDENT_PATHS.editContacts,
        contacts,
        true,
      )

      return data
    } catch (error: any) {
      console.log(error)
    }
  }

  async getApplications() {
    try {
      const { data } = await $fetch.get<ApplicationShort[]>(
        this.STUDENT_PATHS.getApplications,
      )

      return data
    } catch (error: any) {
      console.log(error)
    }
  }
}

export const userService = new UserService()
