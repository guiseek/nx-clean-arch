import { AccountRepository } from '../repositories/account.repository'
import { UseCase } from '@nx-clean-arch/core/entities'
import {
  CreateAccountInput,
  CreateAccountOutput,
} from '../types/create-account'

export class CreateAccountUseCase
  implements UseCase<CreateAccountInput, CreateAccountOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: CreateAccountInput) {
    return this.repository.createAccount(account)
  }
}
