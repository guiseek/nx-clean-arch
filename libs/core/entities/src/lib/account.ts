import { User } from './user'

export interface Account {
  id: number

  displayName: string

  email: string

  isActive: boolean | null

  isBanned: boolean | null

  isBeta: boolean | null

  users: User[]
}
