import {
  UserRepository,
  AccountRepository,
  CreateAccountUseCase,
  UpdateAccountUseCase,
  RemoveAccountUseCase,
  FindAllAccountsUseCase,
  FindAccountByIdUseCase,
  CreateUserAccountUseCase,
  FindAllUsersByAccountUseCase,
} from '@nx-clean-arch/api/account/domain'
import {
  CreateAccountDto,
  UpdateAccountDto,
  RemoveAccountDto,
  FindAccountByIdDto,
  CreateUserAccountDto,
} from '@nx-clean-arch/api/account/adapter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AccountsService {
  createAccountUseCase: CreateAccountUseCase
  updateAccountUseCase: UpdateAccountUseCase
  removeAccountUseCase: RemoveAccountUseCase
  findAccountByIdUseCase: FindAccountByIdUseCase
  findAllUseCase: FindAllAccountsUseCase
  createUserAccountUseCase: CreateUserAccountUseCase
  findAllUsersByAccountUseCase: FindAllUsersByAccountUseCase

  constructor(
    accountRepository: AccountRepository,
    userRepository: UserRepository
  ) {
    this.findAllUseCase = new FindAllAccountsUseCase(accountRepository)
    this.createAccountUseCase = new CreateAccountUseCase(accountRepository)
    this.updateAccountUseCase = new UpdateAccountUseCase(accountRepository)
    this.findAccountByIdUseCase = new FindAccountByIdUseCase(accountRepository)
    this.removeAccountUseCase = new RemoveAccountUseCase(accountRepository)
    this.createUserAccountUseCase = new CreateUserAccountUseCase(userRepository)
    this.findAllUsersByAccountUseCase = new FindAllUsersByAccountUseCase(userRepository)
  }

  create(createAccountDto: CreateAccountDto) {
    return this.createAccountUseCase.execute(createAccountDto)
  }

  createUser(createUserAccountDto: CreateUserAccountDto) {
    return this.createUserAccountUseCase.execute(createUserAccountDto)
  }

  findAll() {
    return this.findAllUseCase.execute()
  }

  findAllUsersByAccount(id: number) {
    return this.findAllUsersByAccountUseCase.execute(id)
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
