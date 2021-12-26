import { typeOrmConfig } from "./ormconfig";

export const environment = {
  production: false,
  typeorm: typeOrmConfig(false)
}
