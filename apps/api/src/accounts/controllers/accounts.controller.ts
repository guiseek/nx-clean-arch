import { CreateAccountDto, UpdateAccountDto } from '@nx-clean-arch/api/account/adapter'
import { AccountsService } from '../services/accounts.service'
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common'

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto)
  }

  @Get()
  findAll() {
    return this.accountsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne({ id: +id })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update({ id: +id, ...updateAccountDto })
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove({ id: +id })
  }
}
