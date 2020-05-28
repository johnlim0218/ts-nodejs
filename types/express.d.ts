import User from '../models/user/user';

declare module "express-serve-static-core" {
    interface Request {
        user?: User;
    }
}