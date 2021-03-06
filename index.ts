import * as express from 'express'; // module에 default가 없는 경우 '* as' 로 import
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import * as helmet from 'helmet';
import { Request, Response, NextFunction, Application } from 'express';

import { sequelize } from './models';
import userRouter from './routes/user/user';

dotenv.config();

const prod = process.env.NODE_ENV === 'production';
const app: Application = express();
app.set('port', prod ? process.env.PORT: 3065);

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공')
    })
    .catch((err: Error) => {
        console.error(err);
    })

if(prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combine'));
    app.use(cors ({
        origin: '',
        credentials: true,
    }));
} else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true,
    }))
}

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
        httpOnly: true,
        secure: false,
        domain: prod ? '' : undefined,
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/user', userRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.send('RUNNING!!');
});

app.listen(app.get('port'), () => {
    console.log(`server is running`);
})