import { AccountRepository } from '../repositories/account.repository'
import { UseCase } from '@nx-clean-arch/core/entities'
import {
  FindAccountByIdInput,
  FindAccountByIdOutput,
} from '../types/find-account'

export class FindAccountByIdUseCase
  implements UseCase<FindAccountByIdInput, FindAccountByIdOutput>
{
  constructor(private readonly repository: AccountRepository) {}

  execute(account: FindAccountByIdInput) {
    return this.repository.findAccountById(account)
  }
}
