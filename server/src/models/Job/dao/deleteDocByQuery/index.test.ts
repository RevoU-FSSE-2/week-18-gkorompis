import 'jest';
import { Unit } from "./index.js";
import { JobQuery } from "../../../../utils/types.js";

describe("testing deleteDoc at Job", ()=>{
    //@ts-ignore
    it("should delete a doc", async()=>{
        const query: JobQuery = {
            createdBy: 'test_createac99f636-d963-446d-b9ad-372a61f52e85',
        };
        const testResponse = await Unit({query});
        expect(testResponse).toBeDefined();
    })
})
