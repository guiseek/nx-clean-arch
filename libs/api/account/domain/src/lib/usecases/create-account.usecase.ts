import { AccountRepository } from '../repositories/account.repository'
import {
  UseCase,
  CreateAccountInput,
  CreateAccountOutput,
} from '@nx-clean-arch/core/entities'

export class CreateAccountUseCase
  implements UseCase<CreateAccountInput, CreateAccountOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: CreateAccountInput) {
    return this.repository.createAccount(account)
  }
}
