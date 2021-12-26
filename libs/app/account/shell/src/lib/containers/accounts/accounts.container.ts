import { UpdateAccountForm } from './../../components/update-account/update-account.form'
import { AccountFacade } from '@nx-clean-arch/app/account/data-access'
import { MediaMatcher } from '@angular/cdk/layout'
import { BehaviorSubject, Subject } from 'rxjs'
import {
  Component,
  ViewChild,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core'
import {
  Account,
  CreateAccountInput,
  UpdateAccountInput,
} from '@nx-clean-arch/core/entities'
import { MatSidenav } from '@angular/material/sidenav'

type Action = 'onlyList' | 'create' | 'edit'

@Component({
  templateUrl: './accounts.container.html',
  styleUrls: ['./accounts.container.scss'],
})
export class AccountsContainer implements OnInit, AfterViewInit, OnDestroy {
  private _destroy = new Subject<void>()

  @ViewChild(MatSidenav) sidenav!: MatSidenav
  @ViewChild(UpdateAccountForm) updateForm!: UpdateAccountForm

  private _action = new BehaviorSubject<Action>('onlyList')
  readonly action$ = this._action.asObservable()

  mobileQuery: MediaQueryList

  private _mobileQueryListener: () => void

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    readonly facade: AccountFacade
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addEventListener('change', this._mobileQueryListener)
  }

  ngOnInit(): void {
    this.facade.loadAccounts()
  }

  ngAfterViewInit(): void {
    console.log(this.sidenav);
  }

  create() {
    this._action.next('create')
  }

  update(account: Account) {
    this.updateForm.form.setValue(account)
    this._action.next('edit')
    this.sidenav.open()
  }

  cancel() {
    this.sidenav.close()
    this._action.next('onlyList')
  }

  createAccount(account: CreateAccountInput) {
    this.facade.createAccount(account)
    this._action.next('onlyList')
  }

  updateAccount(account: UpdateAccountInput) {
    this.facade.updateAccount(account)
    this._action.next('onlyList')
    this.sidenav.close()
  }

  removeAccount(id: number) {
    this.facade.removeAccount(id)
  }

  ngOnDestroy(): void {
    this._destroy.next()
    this._destroy.complete()
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }
}
