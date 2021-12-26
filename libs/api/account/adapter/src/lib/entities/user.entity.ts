import { User as IUser, Account as IAccount } from '@nx-clean-arch/core/entities'

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Account } from './account.entity'

@Index('email_UNIQUE', ['email'], { unique: true })
@Index('fk_user_account_idx', ['accountId'], {})
@Entity('user', { schema: 'nx-clean-arch_dev' })
export class User implements IUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number

  @Column('varchar', { name: 'email', unique: true, length: 60 })
  email!: string

  @Column('varchar', { name: 'password', nullable: true, length: 120 })
  password!: string | null

  @Column('varchar', { name: 'phone', nullable: true, length: 45 })
  phone!: string | null

  @Column('varchar', { name: 'confirmation_code', nullable: true, length: 45 })
  confirmationCode!: string | null

  @Column('tinyint', { name: 'is_confirmed', nullable: true })
  isConfirmed!: boolean | null

  @Column('tinyint', { name: 'is_registered', nullable: true })
  isRegistered!: boolean | null

  @Column('tinyint', { name: 'remember_token', nullable: true })
  rememberToken!: boolean | null

  @Column('int', { primary: true, name: 'account_id' })
  accountId!: boolean

  @ManyToOne(() => Account, (account) => account.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'account_id', referencedColumnName: 'id' }])
  account!: IAccount

  constructor(init: User)
  constructor(init: NonNullable<User>)
  constructor(init: User | NonNullable<User>) {
    Object.assign(this, init)
  }
}
