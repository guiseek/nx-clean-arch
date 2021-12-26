import { typeOrmConfig } from './ormconfig'

export const environment = {
  production: true,
  typeorm: typeOrmConfig(true),
}
