import { ApiAccountAdapterModule } from '@nx-clean-arch/api/account/adapter'
import { AccountsController } from './controllers/accounts.controller'
import { AccountsService } from './services/accounts.service'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAccountAdapterModule],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
