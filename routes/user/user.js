"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserQuery = exports.getUser = void 0;
const express = require("express");
const user_1 = require("../../models/user/user");
// import db from '../../models/index';
const router = express.Router();
exports.getUser = async (req, res, next) => {
    try {
        // console.log(db);
        const result = await user_1.default.findOne({
            where: {
                id: req.params.id
            }
        });
        if (result) {
            console.log(result);
        }
        return res.json(result);
    }
    catch (e) {
        console.error(e);
        return next(e);
    }
};
exports.getUserQuery = async (userId) => {
    console.log(userId);
    return await user_1.default.findOne({
        where: {
            id: userId,
        }
    });
};
router.get('/test/:id', exports.getUser);
exports.default = router;
