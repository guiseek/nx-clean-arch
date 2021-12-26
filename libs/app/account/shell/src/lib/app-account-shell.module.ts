import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountsContainer } from './containers/accounts/accounts.container'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountsContainer,
      }
    ]),
  ],
  declarations: [
    AccountsContainer
  ],
})
export class AppAccountShellModule {}
