import { AccountRepository, UserRepository } from '@nx-clean-arch/api/account/domain'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { AccountTypeOrmRepository } from './repositories/account-typeorm.repository'
import { UserTypeOrmRepository } from './repositories/user-typeorm.repository'
import { Account } from './entities/account.entity'
import { User } from './entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountTypeOrmRepository,
      UserTypeOrmRepository,
      ...[Account, User],
    ], 'default'),
  ],
  controllers: [],
  providers: [
    {
      provide: AccountRepository,
      useExisting: AccountTypeOrmRepository,
    },
    {
      provide: UserRepository,
      useExisting: UserTypeOrmRepository,
    },
  ],
  exports: [AccountRepository, UserRepository],
})
export class ApiAccountAdapterModule {}
