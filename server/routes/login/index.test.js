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
// import {app} from './index.js'
const baseUrl = "https://qtipfa4o65.execute-api.ap-southeast-3.amazonaws.com/dev";
describe("login /login/auth return status 200", () => {
    it('should return 200 if success', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/login/auth")
            .send({ username: "user1", password: "asdfASDF01" });
        expect(responsePost.status).to.equal(200);
    }));
    it('should return 401 if not matched or bad request body', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/login/auth");
        expect(responsePost.status).to.equal(401);
    }));
    it('should return 404 if endpoint is type', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/login/auths")
            .send({ username: "user1", password: "asdfASDF01" });
        expect(responsePost.status).to.equal(404);
    }));
});
