import Unit from './index.js';
import {Request, Response} from 'express';
import {jest} from '@jest/globals';
import { v4 as uuidv4 } from 'uuid';

import 'jest';

const controllerName = "deleteController"
const group = "User"

describe(`${controllerName} at ${group} should return defined response, status 200`, ()=>{
    it('should return 200 at success', async ()=>{
        const uniqueId = uuidv4();
        const condition = {
            name: "John D"
        }

        const req:any = {
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
