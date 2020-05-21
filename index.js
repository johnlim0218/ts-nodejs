"use strict";
exports.__esModule = true;
var express = require("express"); // module에 default가 없는 경우 '* as' 로 import
var prod = process.env.NODE_ENV === 'production';
var app = express();
app.set('port', prod ? process.env.PORT : 3065);
app.get('/', function (req, res, next) {
    return res.send('RUNNING!!');
});
app.listen(app.get('port'), function () {
    console.log("server is running");
});
