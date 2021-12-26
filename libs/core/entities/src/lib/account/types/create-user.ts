import { User } from '../user'

type NewUser = Omit<User, 'isConfirmed' | 'isRegistered' | 'rememberToken' | 'confirmationCode' | 'account'>

export type CreateUserInput = Omit<NewUser, 'id'>
export type CreateUserOutput = NewUser
