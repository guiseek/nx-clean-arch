import { Account } from '@nx-clean-arch/core/entities'
import { HttpClient } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { BehaviorSubject, Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'nx-clean-arch-accounts',
  templateUrl: './accounts.container.html',
  styleUrls: ['./accounts.container.scss'],
})
export class AccountsContainer implements OnInit, OnDestroy {
  private _destroy = new Subject<void>()

  private _accounts = new BehaviorSubject<Account[]>([])
  readonly accounts$ = this._accounts.asObservable()

  createForm = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private http: HttpClient) {}

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

  ngOnDestroy(): void {
    this._destroy.next()
    this._destroy.complete()
  }
}
