var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from "supertest";
import { expect } from 'chai';
const baseUrl = "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev";
describe("login /serviceRequest", () => {
    it('should return 200 when invoked', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/logout")
            .send({});
        expect(responsePost.status).to.equal(200);
    }));
});
