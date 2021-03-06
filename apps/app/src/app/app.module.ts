import { AppSharedUiMaterialModule } from '@nx-clean-arch/app/shared/ui/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AccountFacade, AccountHttpService } from '@nx-clean-arch/app/account/data-access'
import { AccountDataService } from '@nx-clean-arch/app/account/domain'
import { Http } from '@nx-clean-arch/core/entities'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppSharedUiMaterialModule.forRoot({
      sidenav: { autoSize: true },
      checkbox: { color: 'accent' },
      formField: { appearance: 'outline' }
    }),
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@nx-clean-arch/app/account/shell').then(
              (module) => module.AppAccountShellModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [
    {
      provide: Http,
      useClass: HttpClient,
    },
    {
      provide: AccountDataService,
      useFactory: (http: Http) => {
        return new AccountHttpService(http)
      },
      deps: [Http]
    },
    {
      provide: AccountFacade,
      useFactory: (dataService: AccountDataService) => {
        return new AccountFacade(dataService)
      },
      deps: [AccountDataService]
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
