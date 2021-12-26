import { UserRepository } from '../repositories/user.repository'
import {
  UseCase,
  User
} from '@nx-clean-arch/core/entities'

export class FindAllUsersByAccountUseCase
  implements UseCase<number, User[]>
{
  constructor(private readonly repository: UserRepository) {}

  execute(accountId: number) {
    return this.repository.findAllByAccount(accountId)
  }
}
