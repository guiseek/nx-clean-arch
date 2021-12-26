import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Account as IAccount, User as IUser } from '@nx-clean-arch/core/entities'
import { User } from './user.entity'

@Entity('account', { schema: 'nx-clean-arch_dev' })
export class Account implements IAccount {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number

  @Column('varchar', { name: 'display_name', length: 45 })
  displayName!: string

  @Column('varchar', { name: 'email', length: 45 })
  email!: string

  @Column('tinyint', { name: 'is_active', nullable: true })
  isActive!: boolean | null

  @Column('tinyint', { name: 'is_banned', nullable: true })
  isBanned!: boolean | null

  @Column('varchar', { name: 'is_beta', nullable: true, length: 45 })
  isBeta!: boolean | null

  @OneToMany(() => User, (user) => user.account)
  users!: IUser[]

  constructor(init: Account)
  constructor(init: NonNullable<Account>)
  constructor(init: Account | NonNullable<Account>) {
    Object.assign(this, init)
  }
}
