"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); // module에 default가 없는 경우 '* as' 로 import
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");
const hpp = require("hpp");
const helmet = require("helmet");
const models_1 = require("./models");
const user_1 = require("./routes/user/user");
dotenv.config();
const prod = process.env.NODE_ENV === 'production';
const app = express();
app.set('port', prod ? process.env.PORT : 3065);
models_1.sequelize.sync({ force: false })
    .then(() => {
    console.log('데이터베이스 연결 성공');
})
    .catch((err) => {
    console.error(err);
});
if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combine'));
    app.use(cors({
        origin: '',
        credentials: true,
    }));
}
else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true,
    }));
}
app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
        domain: prod ? '' : undefined,
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/user', user_1.default);
app.get('/', (req, res, next) => {
    return res.send('RUNNING!!');
});
app.listen(app.get('port'), () => {
    console.log(`server is running`);
});
