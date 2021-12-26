import { Account } from './account'

export interface User {
  id: number

  email: string

  password: string | null

  phone: string | null

  confirmationCode: string | null

  isConfirmed: boolean | null

  isRegistered: boolean | null

  rememberToken: boolean | null

  accountId: boolean

  account: Account
}
