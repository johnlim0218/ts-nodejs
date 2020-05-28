import * as express from 'express';
import { Request, Response, NextFunction, Application } from 'express';
import User from '../../models/user/user';
// import db from '../../models/index';

const router = express.Router();

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        // console.log(db);
        const result = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        if(result){
            console.log(result);

        }
        return res.json(result);
    } catch(e) {
        console.error(e);
        return next(e);
    }
};

export const getUserQuery = async (userId : number) => {
    console.log(userId);
    return await User.findOne({
        where: {
            id: userId,
        }
    });
};

router.get('/test/:id', getUser);



export default router;