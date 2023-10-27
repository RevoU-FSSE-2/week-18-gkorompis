var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Unit from './index.js';
import { jest } from '@jest/globals';
import 'jest';
const controllerName = "getController";
const group = "Job";
describe(`${controllerName} at ${group} should return defined response, status 200`, () => {
    it('should return 200 at success', () => __awaiter(void 0, void 0, void 0, function* () {
        //foo
        const req = { query: {} };
        const res = {
            status: jest.fn(() => res),
            json: jest.fn()
        };
        const testingResponse = yield Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    }));
    it('should return 500 at error ', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = { query: "test" };
        const res = {
            status: jest.fn(() => res),
            json: jest.fn()
        };
        const testingResponse = yield Unit(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    }));
});
