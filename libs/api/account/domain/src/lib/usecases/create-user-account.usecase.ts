import { UserRepository } from '../repositories/user.repository'
import {
  UseCase,
  CreateUserInput,
  CreateUserOutput,
} from '@nx-clean-arch/core/entities'

export class CreateUserAccountUseCase
  implements UseCase<CreateUserInput, CreateUserOutput>
{
  constructor(private readonly repository: UserRepository) {}

  execute(account: CreateUserInput) {
    return this.repository.createUser(account)
  }
}
