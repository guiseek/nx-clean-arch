import { User, Account } from '@nx-clean-arch/api/account/adapter'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { environment } from './environments/environment'
import { AccountsModule } from './accounts/accounts.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(environment.typeorm([Account, User])),
    AccountsModule,
  ],
})
export class AppModule {}
