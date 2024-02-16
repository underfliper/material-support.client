export interface StudentPersonalInfo {
  surname: string
  name: string
  lastname: string
  group: string
  gender: string
  birthday: string
  birthplace: string
  citizenship: string
}

export interface StudentContacts {
  phone: string
  email: string
}

export interface Student extends StudentPersonalInfo {
  contacts: StudentContacts
}
