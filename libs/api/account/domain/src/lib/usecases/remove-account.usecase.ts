import { AccountRepository } from '../repositories/account.repository'
import { UseCase } from '@nx-clean-arch/core/entities'
import {
  RemoveAccountInput,
  RemoveAccountOutput,
} from '../types/remove-account'

export class RemoveAccountUseCase
  implements UseCase<RemoveAccountInput, RemoveAccountOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: RemoveAccountInput) {
    return this.repository.removeAccount(account)
  }
}
