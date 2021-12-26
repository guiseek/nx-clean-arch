import { Account } from '@nx-clean-arch/core/entities'

export type FindAccountByIdInput = Pick<Account, 'id'>
export type FindAccountByIdOutput = Account
