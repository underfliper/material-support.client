export interface AuthenticatedUser {
  id: number
  role: UserRole
  accessToken: string
}

export enum UserRole {
  Admin,
  Moderator,
  Student,
}
