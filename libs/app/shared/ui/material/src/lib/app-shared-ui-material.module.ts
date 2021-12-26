import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field'
import {
  MatCheckboxModule,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox'
import {
  MatSidenavModule,
  MAT_DRAWER_DEFAULT_AUTOSIZE,
} from '@angular/material/sidenav'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MaterialConfig } from './interfaces'

@NgModule({
  exports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
})
export class AppSharedUiMaterialModule {
  static forRoot(
    config: MaterialConfig = {}
  ): ModuleWithProviders<AppSharedUiMaterialModule> {
    const providers = []

    if (config.formField) {
      providers.push({
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: config.formField,
      })
    }

    if (config.checkbox) {
      providers.push({
        provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
        useValue: config.checkbox,
      })
    }

    if (config.sidenav) {
      providers.push({
        provide: MAT_DRAWER_DEFAULT_AUTOSIZE,
        useValue: config.sidenav,
      })
    }

    return {
      ngModule: AppSharedUiMaterialModule,
      providers,
    }
  }
}
