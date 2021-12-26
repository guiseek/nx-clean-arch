import { AccountRepository } from '@nx-clean-arch/api/account/domain'
import { FindAccountByIdDto } from '../dtos/find-account-by-id.dto'
import { CreateAccountDto } from '../dtos/create-account.dto'
import { UpdateAccountDto } from '../dtos/update-account.dto'
import { RemoveAccountDto } from '../dtos/remove-account.dto'
import { EntityRepository, Repository } from 'typeorm'
import { Account } from '../entities/account.entity'

@EntityRepository(Account)
export class AccountTypeOrmRepository
  extends Repository<Account>
  implements AccountRepository
{
  findAll() {
    return this.find()
  }

  findAccountById(id: FindAccountByIdDto) {
    return this.findOne(id)
  }

  createAccount(account: CreateAccountDto) {
    const entity = this.create(account)
    return this.save(entity)
  }

  async updateAccount(account: UpdateAccountDto) {
    const updated = await this.update(account.id, account)
    return updated.affected > 0 ? this.findOne(account.id) : null
  }

  async removeAccount(account: RemoveAccountDto) {
    return this.delete(account.id).then(() => null)
  }
}
