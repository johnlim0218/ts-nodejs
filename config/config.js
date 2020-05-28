"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sequelize-cli가 ts를 인식하지 못한다.
// js로 실행후 ts로 변경
// sequelize db:create
const dotenv = require("dotenv");
dotenv.config();
const config = {
    "development": {
        "username": "root",
        "password": process.env.DB_PASSWORD,
        "database": "johnsdb",
        "host": "127.0.0.1",
        "dialect": "mysql",
    },
    "test": {
        "username": "root",
        "password": process.env.DB_PASSWORD,
        "database": "johnsdb",
        "host": "127.0.0.1",
        "dialect": "mysql",
    },
    "production": {
        "username": "root",
        "password": process.env.DB_PASSWORD,
        "database": "johnsdb",
        "host": "127.0.0.1",
        "dialect": "mysql",
    }
};
exports.default = config;
