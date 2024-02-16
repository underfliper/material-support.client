export interface ApiResponse<T> {
  data: T
  status: number
}

export class ApiError extends Error {
  statusCode: number

  constructor(message: string | undefined, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}
