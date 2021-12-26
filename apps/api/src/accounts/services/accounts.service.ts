import {
  UserRepository,
  AccountRepository,
  CreateAccountUseCase,
  UpdateAccountUseCase,
  RemoveAccountUseCase,
  FindAllAccountsUseCase,
  FindAccountByIdUseCase,
} from '@nx-clean-arch/api/account/domain'
import {
  CreateAccountDto,
  UpdateAccountDto,
  RemoveAccountDto,
  FindAccountByIdDto
} from '@nx-clean-arch/api/account/adapter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AccountsService {
  createAccountUseCase: CreateAccountUseCase
  updateAccountUseCase: UpdateAccountUseCase
  removeAccountUseCase: RemoveAccountUseCase
  findAccountByIdUseCase: FindAccountByIdUseCase
  findAllUseCase: FindAllAccountsUseCase

  constructor(accountRepository: AccountRepository) {
    this.findAllUseCase = new FindAllAccountsUseCase(accountRepository)
    this.createAccountUseCase = new CreateAccountUseCase(accountRepository)
  }

  create(createAccountDto: CreateAccountDto) {
    return this.createAccountUseCase.execute(createAccountDto)
  }

  findAll() {
    return this.findAllUseCase.execute()
  }

  findOne(findAccountById: FindAccountByIdDto) {
    return this.findAccountByIdUseCase.execute(findAccountById)
  }

  update(updateAccountDto: UpdateAccountDto) {
    return this.updateAccountUseCase.execute(updateAccountDto)
  }

  remove(removeAccountDto: RemoveAccountDto) {
    return this.removeAccountUseCase.execute(removeAccountDto)
  }
}
