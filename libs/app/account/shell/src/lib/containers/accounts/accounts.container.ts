import { UpdateAccountForm } from './../../components/update-account/update-account.form';
import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core'
import { AccountFacade } from '@nx-clean-arch/app/account/data-access'
import {
  Account,
  CreateAccountInput,
  UpdateAccountInput,
} from '@nx-clean-arch/core/entities'
import { BehaviorSubject, Subject } from 'rxjs'

type Action = 'onlyList' | 'create' | 'edit'

@Component({
  templateUrl: './accounts.container.html',
  styleUrls: ['./accounts.container.scss'],
})
export class AccountsContainer implements OnInit, OnDestroy {
  private _destroy = new Subject<void>()

  @ViewChild(UpdateAccountForm) updateForm!: UpdateAccountForm

  private _action = new BehaviorSubject<Action>('onlyList')
  readonly action$ = this._action.asObservable()

  constructor(readonly facade: AccountFacade) {}

  ngOnInit(): void {
    this.facade.loadAccounts()
  }

  create() {
    this._action.next('create')
  }

  update(account: Account) {
    this.updateForm.form.setValue(account)
    this._action.next('edit')
  }

  cancel() {
    this._action.next('onlyList')
  }

  createAccount(account: CreateAccountInput) {
    this.facade.createAccount(account)
    this._action.next('onlyList')
  }

  updateAccount(account: UpdateAccountInput) {
    this.facade.updateAccount(account)
    this._action.next('onlyList')
  }

  removeAccount(id: number) {
    this.facade.removeAccount(id)
  }

  ngOnDestroy(): void {
    this._destroy.next()
    this._destroy.complete()
  }
}
