import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { config } from 'dotenv'

config()

const env = process.env

type TypeOrmType = 'mysql' | 'postgres' | 'mariadb' | 'mssql'

export const typeOrmConfig = (isProd = false) => {
  return (entities: any[] = []): TypeOrmModuleOptions => ({
    type: env.TYPEORM_TYPE as TypeOrmType,
    database: env.TYPEORM_DATABASE,
    username: env.TYPEORM_USERNAME,
    password: env.TYPEORM_PASSWORD,
    port: +env.TYPEORM_POST,
    host: env.TYPEORM_HOST,
    synchronize: !isProd,
    logging: !isProd,
    entities,
  })
}
