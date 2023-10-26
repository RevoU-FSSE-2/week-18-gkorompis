var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'jest';
import { Unit } from "./index.js";
describe("testing deleteDoc at Job", () => {
    //@ts-ignore
    it("should delete a doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = {
            createdBy: 'test_createac99f636-d963-446d-b9ad-372a61f52e85',
        };
        const testResponse = yield Unit({ query });
        expect(testResponse).toBeDefined();
    }));
});
