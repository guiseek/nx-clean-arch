import { AccountRepository } from '../repositories/account.repository'
import {
  UseCase,
  RemoveAccountInput,
  RemoveAccountOutput,
} from '@nx-clean-arch/core/entities'

export class RemoveAccountUseCase
  implements UseCase<RemoveAccountInput, RemoveAccountOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: RemoveAccountInput) {
    return this.repository.removeAccount(account)
  }
}
