import { CreateUserInput } from '@nx-clean-arch/core/entities'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserAccountDto implements CreateUserInput {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Seu nome visível é obrigatório' })
  displayName: string

  @ApiProperty({
    type: String,
    required: true,
    example: 'usuario@provedor.com.br',
  })
  @IsNotEmpty({ message: 'Email obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  email: string

  @ApiProperty({
    type: String,
    required: true,
    minLength: 6
  })
  @IsNotEmpty({ message: 'senha obrigatória' })
  @MinLength(6, { message: 'mínimo de 6 caracteres' })
  password: string


  @ApiProperty({
    type: String,
    required: true,
    minLength: 6
  })
  @IsNotEmpty({ message: 'telefone obrigatório' })
  phone: string

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty({ message: 'conta obrigatória' })
  accountId: number
}
