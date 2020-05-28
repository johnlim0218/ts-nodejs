"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number = require("../../src/number");
const user_1 = require("../../routes/user/user");
// jest.mock('../../models/user/user', () => () => {
//     const SequelizeMock = require('sequelize-mock');
//     const dbMock = new SequelizeMock();
//     return dbMock.define('user', {
//         nickname: 'johnLim',
//         userId: 'zanki99@naver.com',
//         password: '1234',
//     })
// })
// beforeAll(async () => {
//     return await sequelize.sync();
// });
// afterAll(async () => {
//     return await sequelize.close();
// });
describe("Test Sequelize Mocking", () => {
    it('should be 0!', () => {
        const result = number.getFirstNumber(100);
        expect(result).toBe(0);
        // const result = testFunction(1);
        // expect(result).toEqual(2);
    });
});
describe("Mocking Test", () => {
    it('should get value from mock', async () => {
        const user = await user_1.getUserQuery(1);
        expect(user.id).toBe(1);
    });
});
