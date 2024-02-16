export enum ApplicationStatus {
  UnderReview,
  PendingConfirmation,
  Approved,
  Denied,
  Processed,
}

export interface ApplicationShort {
  id: number
  date: string
  status: ApplicationStatus
}
