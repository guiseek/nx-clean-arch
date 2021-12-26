import { AccountDataService } from '@nx-clean-arch/app/account/domain'
import { Account, Http } from '@nx-clean-arch/core/entities'

export class AccountHttpService implements AccountDataService {
  constructor(private http: Http) { }

  getAccount(id: number) {
    return this.http.get<Account>(`/api/accounts/${id}`)
  }

  getAccounts() {
    return this.http.get<Account[]>('/api/accounts')
  }

  createAccount(account: Account) {
    return this.http.post<Account>('/api/accounts', account)
  }

  updateAccount(account: Account) {
    return this.http.patch<Account>(`/api/accounts/${account.id}`, account)
  }

  removeAccount(id: number) {
    return this.http.delete<void>(`/api/accounts/${id}`)
  }
}
