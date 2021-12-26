import { Account } from '@nx-clean-arch/core/entities'

export type RemoveAccountInput = Pick<Account, 'id'>
export type RemoveAccountOutput = void
