import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';

import { AppSharedUiMaterialModule } from '@nx-clean-arch/app/shared/ui/material';

import { AccountsContainer } from './containers/accounts/accounts.container';
import { CreateAccountForm } from './components/create-account/create-account.form';
import { UpdateAccountForm } from './components/update-account/update-account.form';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule,
    AppSharedUiMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountsContainer,
      }
    ]),
  ],
  declarations: [
    AccountsContainer,
    CreateAccountForm,
    UpdateAccountForm,
    ListAccountsComponent,
  ],
})
export class AppAccountShellModule { }
