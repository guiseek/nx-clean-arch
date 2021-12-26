import { UpdateAccountInput } from '@nx-clean-arch/core/entities'
import { IsEmail, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateAccountDto implements UpdateAccountInput {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty({ message: 'id obrigatório' })
  id: number

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'nome visível obrigatório' })
  displayName: string

  @ApiProperty({
    type: String,
    required: true,
    example: 'usuario@provedor.com.br',
  })
  @IsNotEmpty({ message: 'email é obrigatório' })
  @IsEmail({}, { message: 'email inválido' })
  email: string
}
