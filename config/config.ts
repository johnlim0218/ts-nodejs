// sequelize-cli가 ts를 인식하지 못한다.
// js로 실행후 ts로 변경
// sequelize db:create
import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
  username: string,
  password: string,
  database: string,
  host: string,
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql',
  [key: string]: string,
}

interface IConfig {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfig = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "johnsdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "johnsdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "johnsdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
  }
}

export default config;