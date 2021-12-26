import { CreateAccountInput } from '@nx-clean-arch/core/entities'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateAccountDto implements CreateAccountInput {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Seu nome visível é obrigatório' })
  displayName!: string

  @ApiProperty({
    type: String,
    required: true,
    example: 'usuario@provedor.com.br',
  })
  @IsNotEmpty({ message: 'Email obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  email!: string
}
