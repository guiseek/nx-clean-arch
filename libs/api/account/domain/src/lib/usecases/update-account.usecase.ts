import { AccountRepository } from '../repositories/account.repository'
import {
  UseCase,
  UpdateAccountInput,
  UpdateAccountOutput,
} from '@nx-clean-arch/core/entities'

export class UpdateAccountUseCase
  implements UseCase<UpdateAccountInput, UpdateAccountOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: UpdateAccountInput) {
    return this.repository.updateAccount(account)
  }
}
