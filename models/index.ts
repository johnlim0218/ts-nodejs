import User, { associate as userAssociate } from './User/User';
export * from './sequelize';

const db = {
  User,
}

export type dbType = typeof db;