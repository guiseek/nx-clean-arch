import { Account, User } from '@nx-clean-arch/core/entities'

export type CreateUserAccountInput = {
  account: NonNullable<Account>
  user: NonNullable<User>
}

export type CreateUserAccountOutput = Omit<Account, 'password'>

