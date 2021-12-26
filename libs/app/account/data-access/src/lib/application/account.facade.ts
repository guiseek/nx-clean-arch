import { AccountDataService } from '@nx-clean-arch/app/account/domain'
import { Account, CreateAccountInput, UpdateAccountInput } from '@nx-clean-arch/core/entities'
import { BehaviorSubject, take } from 'rxjs'

export class AccountFacade {
  private _accounts = new BehaviorSubject<Account[]>([])
  accounts$ = this._accounts.asObservable()

  private _account = new BehaviorSubject<Account | null>(null)
  account$ = this._account.asObservable()

  constructor(private dataService: AccountDataService) {}

  loadAccounts() {
    this.dataService
      .getAccounts()
      .pipe(take(1))
      .subscribe((accounts: Account[]) => {
        this._accounts.next(accounts)
      })
  }

  createAccount(account: CreateAccountInput) {
    this.dataService
      .createAccount(account)
      .pipe(take(1))
      .subscribe((account) => {
        console.log(account)
        const accounts = this._accounts.getValue()
        this._accounts.next([...accounts, account])
      })
  }

  updateAccount(account: UpdateAccountInput) {
    this.dataService
      .updateAccount(account)
      .pipe(take(1))
      .subscribe(() => {
        this.loadAccounts()
      })
  }

  loadAccount(id: number) {
    this.dataService
      .getAccount(id)
      .pipe(take(1))
      .subscribe((account) => {
        this._account.next(account)
      })
  }

  removeAccount(id: number) {
    this.dataService
      .removeAccount(id)
      .pipe(take(1))
      .subscribe(() => {
        this.loadAccounts()
      })
  }
}
