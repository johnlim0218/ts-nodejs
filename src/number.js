"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equalNumber = exports.justReturn = exports.returnFirstNum = exports.getFirstNumber = void 0;
exports.getFirstNumber = (num) => {
    if (num >= 10) {
        return returnFirstNum(num);
    }
    else {
        return justReturn(num);
    }
};
function returnFirstNum(num) {
    return num % 10;
}
exports.returnFirstNum = returnFirstNum;
function justReturn(num) {
    return num;
}
exports.justReturn = justReturn;
exports.equalNumber = (num) => {
    return num;
};
