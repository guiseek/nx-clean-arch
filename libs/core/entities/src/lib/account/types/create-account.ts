import { Account } from '../account'

type NonNullAccount = NonNullable<Account>

export type CreateAccountInput = Omit<NonNullAccount, 'id' | 'users' | 'isBeta' | 'isBanned' | 'isActive'>
export type CreateAccountOutput = NonNullAccount

