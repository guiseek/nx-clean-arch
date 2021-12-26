import { CreateUserInput, User } from '@nx-clean-arch/core/entities'

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>

  abstract findAllByAccount(accountId: number): Promise<User[]>

  abstract createUser(account: CreateUserInput): Promise<User>
}
