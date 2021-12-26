import { AccountRepository } from '../repositories/account.repository'
import { Account, UseCase } from '@nx-clean-arch/core/entities'

export class FindAllAccountsUseCase implements UseCase<void, Account[]> {
  constructor(private readonly repository: AccountRepository) {}

  execute() {
    return this.repository.findAll()
  }
}
