import {
  Account,
  CreateAccountInput,
  UpdateAccountInput,
} from '@nx-clean-arch/core/entities'
import { Observable } from 'rxjs'

export abstract class AccountDataService {
  abstract getAccount(id: number): Observable<Account>

  abstract getAccounts(): Observable<Account[]>

  abstract createAccount(account: CreateAccountInput): Observable<Account>

  abstract updateAccount(account: UpdateAccountInput): Observable<Account>

  abstract removeAccount(id: number): Observable<void>
}
