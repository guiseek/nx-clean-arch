import { Account } from '@nx-clean-arch/core/entities'
import {
  FindAccountByIdInput,
  FindAccountByIdOutput,
} from '../types/find-account'
import {
  RemoveAccountInput,
  RemoveAccountOutput,
} from '../types/remove-account'
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './../types/create-account'
import {
  UpdateAccountInput,
  UpdateAccountOutput,
} from './../types/update-account'

export abstract class AccountRepository {
  abstract findAll(): Promise<Account[]>

  abstract findAccountById(
    account: FindAccountByIdInput
  ): Promise<FindAccountByIdOutput>

  abstract createAccount(
    account: CreateAccountInput
  ): Promise<CreateAccountOutput>

  abstract updateAccount(
    account: UpdateAccountInput
  ): Promise<UpdateAccountOutput>

  abstract removeAccount(id: RemoveAccountInput): Promise<RemoveAccountOutput>
}
