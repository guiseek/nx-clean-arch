import {
  Account,
  FindAccountByIdInput,
  FindAccountByIdOutput,
  RemoveAccountInput,
  RemoveAccountOutput,
  CreateAccountInput,
  CreateAccountOutput,
  UpdateAccountInput,
  UpdateAccountOutput,
} from '@nx-clean-arch/core/entities'

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
