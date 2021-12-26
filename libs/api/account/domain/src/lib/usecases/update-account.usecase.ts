import { AccountRepository } from '../repositories/account.repository'
import { UseCase } from '@nx-clean-arch/core/entities'
import {
  UpdateAccountInput,
  UpdateAccountOutput,
} from '../types/update-account'

export class UpdateAccountUseCase
  implements UseCase<UpdateAccountInput, UpdateAccountOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: UpdateAccountInput) {
    return this.repository.updateAccount(account)
  }
}
