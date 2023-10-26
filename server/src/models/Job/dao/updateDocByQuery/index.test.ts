import 'jest';
import { Unit } from "./index.js";
import { JobQuery } from "../../../../utils/types.js";
import { v4 as uuidv4 } from 'uuid';

describe("testing findManyDoc at Job", ()=>{
    const uniqueId = uuidv4();
    it("should return update info", async()=>{
        const query: JobQuery = {
            createdBy: 'test create3d901556-a177-4dc5-b7c4-c056134b5993',
        };
        const update: JobQuery = {
            isAlert: true,
        };
        const testResponse = await Unit({query, update});
        expect(testResponse).toBeDefined();
    })
})
