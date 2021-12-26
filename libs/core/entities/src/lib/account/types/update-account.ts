import { Account } from '@nx-clean-arch/core/entities'

export type UpdateAccountInput = Partial<Account> & Pick<Account, 'id'>
export type UpdateAccountOutput = Account
