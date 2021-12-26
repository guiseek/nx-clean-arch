import { UpdateAccountDto } from './update-account.dto'
import { PickType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class RemoveAccountDto extends PickType(UpdateAccountDto, ['id']) {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty({ message: 'id obrigatório' })
  id: number
}
