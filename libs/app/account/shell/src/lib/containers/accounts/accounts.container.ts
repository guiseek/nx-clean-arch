import { Component, OnDestroy, OnInit } from '@angular/core'
import { BehaviorSubject, Subject, takeUntil } from 'rxjs'
import { FormBuilder, Validators } from '@angular/forms'
import { Account } from '@nx-clean-arch/core/entities'
import { HttpClient } from '@angular/common/http'


function merge(target: Object, source: Object): Object {
  return Object.assign(target, source)
}

@Component({
  selector: 'nx-clean-arch-accounts',
  templateUrl: './accounts.container.html',
  styleUrls: ['./accounts.container.scss'],
})
export class AccountsContainer implements OnInit, OnDestroy {
  private _destroy = new Subject<void>()

  private _accounts = new BehaviorSubject<Account[]>([])
  readonly accounts$ = this._accounts.asObservable()

  currentAction: 'onlyList' | 'create' | 'edit' = 'onlyList'

  private _createForm = {
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  }

  private _updateForm = merge(this._createForm, {
    id: ['', [Validators.required]],
    isActive: [false],
    isBanned: [false],
    isBeta: [false],
  })


  createForm = this.form.group(this._createForm)
  updateForm = this.form.group(this._updateForm)

  constructor(
    private form: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAccounts()
  }

  getAccounts() {
    this.http
      .get<Account[]>('/api/accounts')
      .pipe(takeUntil(this._destroy))
      .subscribe((accounts) => {
        console.log(accounts);

        this._accounts.next(accounts)
      })
  }

  update(account: Account) {
    this.updateForm.setValue(account)
    this.currentAction = 'edit'
  }

  createAccount() {
    this.createForm.markAllAsTouched()

    if (this.createForm.valid) {
      this.http
        .post<Account>(`/api/accounts`, this.createForm.value)
        .subscribe((account) => {
          this._accounts.next([...this._accounts.value, account])
          this.createForm.reset()
        })
    }
  }

  updateAccount() {
    this.createForm.markAllAsTouched()

    if (this.updateForm.valid) {
      const { id, ...value } = this.updateForm.value
      this.http
        .patch<Account>(`/api/accounts/${id}`, { id, ...value })
        .subscribe((account) => {
          this.getAccounts()
          this.updateForm.reset()
        })
    }
  }

  removeAccount(accountId: number) {
    this.http
      .delete(`/api/accounts/${accountId}`)
      .subscribe(() => {
        this.getAccounts()
      })
  }

  ngOnDestroy(): void {
    this._destroy.next()
    this._destroy.complete()
  }
}
