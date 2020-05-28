"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
class User extends sequelize_1.Model {
}
User.init({
    nickname: {
        type: sequelize_1.DataTypes.STRING(20),
    },
    userId: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'User',
    tableName: 'user',
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
exports.associate = (db) => {
};
exports.default = User;
