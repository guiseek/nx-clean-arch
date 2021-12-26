import { FindAllAccountsUseCase } from './find-all-accounts.usecase'

describe('FindAllAccountsUseCase', () => {
  it('should work', () => {
    expect(new FindAllAccountsUseCase(new Object() as any)).toEqual('api-account-domain')
  })
})
