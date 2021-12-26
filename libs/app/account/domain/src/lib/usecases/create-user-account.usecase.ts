import { AccountDataService } from '@nx-clean-arch/app/account/domain'
import {
  CreateUserAccountInput,
  CreateUserAccountOutput,
} from '../types/create-user-account'
import {
  UseCase,
} from '@nx-clean-arch/core/entities'

export class CreateUserAccountUseCase
  implements UseCase<CreateUserAccountInput, CreateUserAccountOutput>
{
  constructor(private dataService: AccountDataService) {}

  execute(account: CreateUserAccountInput) {
    // return this.dataService.createAccount(account)
  }
}
