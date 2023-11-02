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
const baseUrl = "https://edpkdmygqf.execute-api.ap-southeast-3.amazonaws.com/dev";
describe("login /resetToken", () => {
    it('should return 500 if token is not found', () => __awaiter(void 0, void 0, void 0, function* () {
        const responsePost = yield request(baseUrl)
            .post("/resetToken/password/request")
            .send({});
        expect(responsePost.status).to.equal(500);
    }));
});
