import { UserRepository } from '@nx-clean-arch/api/account/domain'
import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities/user.entity'

@EntityRepository(User)
export class UserTypeOrmRepository
  extends Repository<User>
  implements UserRepository
{
  findAll() {
    return this.find()
  }
}
