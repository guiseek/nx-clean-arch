import { User } from '@nx-clean-arch/core/entities'

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>
}
