import { Account } from '@nx-clean-arch/core/entities'

type NonNullAccount = NonNullable<Account>

export type CreateAccountInput = Omit<NonNullAccount, 'id' | 'users' | 'isBeta' | 'isBanned' | 'isActive'>
export type CreateAccountOutput = NonNullAccount

