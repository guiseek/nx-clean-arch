import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { CreateAccountInput } from '@nx-clean-arch/core/entities'
import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'nx-clean-arch-create-account',
  templateUrl: './create-account.form.html',
  styleUrls: ['./create-account.form.scss'],
})
export class CreateAccountForm {
  @Output() send = new EventEmitter<CreateAccountInput>()

  @Output() cancel = new EventEmitter<void>()

  form = this._form.group({
    displayName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private _form: FormBuilder) { }

  createAccount() {
    this.form.markAllAsTouched()

    if (this.form.valid) {
      this.send.emit(this.form.value)
      this.form.reset()
    }
  }
}
