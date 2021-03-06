import { AccountRepository } from '../repositories/account.repository'
import {
  UseCase,
  FindAccountByIdInput,
  FindAccountByIdOutput,
} from '@nx-clean-arch/core/entities'

export class FindAccountByIdUseCase
  implements UseCase<FindAccountByIdInput, FindAccountByIdOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: FindAccountByIdInput) {
    return this.repository.findAccountById(account)
  }
}
