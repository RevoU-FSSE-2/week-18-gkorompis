import Unit from './index.js';
import {Request, Response} from 'express';
import {jest} from '@jest/globals';
import { v4 as uuidv4 } from 'uuid';

import 'jest';

const controllerName = "updateController"
//foo
const group = "Job"

describe(`${controllerName} at ${group} should return defined response, status 200`, ()=>{
    it('should return 200 at success', async ()=>{
        const uniqueId = uuidv4();
        //foo
        const condition = {
            _id: "653ac97ac4f2448115f5e8db"
        }
        const document = {
            email: `${uniqueId}@example.com`,
            createdAt: new Date()
        };

        const req:any = {
            body: document,
            query: condition
        };
        const res:any = {
            status: jest.fn(()=> res),
            json: jest.fn()
        };

        const testingResponse = await Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    })

    it('should return 500 at error ', async ()=>{
        const req:any = {query:"test"};
        const res:any = {
            status: jest.fn(()=> res),
            json: jest.fn()
        };
        const testingResponse = await Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    })
})
