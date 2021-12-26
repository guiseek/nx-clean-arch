import { CreateUserAccountDto } from '../dtos/create-user-account.dto';
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

  findAllByAccount(accountId: number) {
    return this.find({ accountId })
  }

  createUser(account: CreateUserAccountDto) {
    const entity = this.create(account)
    return this.save(entity)
  }
}
