import { UpdateAccountInput } from '@nx-clean-arch/core/entities';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nx-clean-arch-update-account',
  templateUrl: './update-account.form.html',
  styleUrls: ['./update-account.form.scss']
})
export class UpdateAccountForm {
  @Output() send = new EventEmitter<UpdateAccountInput>()

  @Output() cancel = new EventEmitter<void>()

  form = this._form.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    id: [0, [Validators.required]],
    isActive: [false],
    isBanned: [false],
    isBeta: [false],
  })

  constructor(private _form: FormBuilder) { }

  updateAccount() {
    this.form.markAllAsTouched()

    if (this.form.valid) {
      this.send.emit(this.form.value)
      this.form.reset()
    }
  }
}
