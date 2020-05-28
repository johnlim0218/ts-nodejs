import User, { associate as associateUser } from './user/user';
export * from './sequelize';

export const db = {
  User,
}

export type dbType = typeof db;

associateUser(db);
