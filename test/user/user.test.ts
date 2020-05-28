import * as httpMocks from 'node-mocks-http';
import * as sinon from 'sinon';
import { EventEmitter } from 'events';
import { Fn } from 'sequelize/types/lib/utils';
import { Model } from 'sequelize/types';
import { any } from 'bluebird';
import * as number from '../../src/number';
import { db } from '../../models/index';
import { sequelize } from '../../models/sequelize';
import { getUser, getUserQuery } from '../../routes/user/user';
import User from '../../models/user/user';

jest.mock('../../models/user/user', () => () => {
    const SequelizeMock = require('sequelize-mock');
    const dbMock = new SequelizeMock();
    return dbMock.define('user', {
        nickname: 'johnLim',
        userId: 'zanki99@naver.com',
        password: '1234',
    })
})

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
    
    it('should get value from mock', async() => {
        const user = await getUserQuery(1);
        expect(user!.id).toBe(1);
    })
})

