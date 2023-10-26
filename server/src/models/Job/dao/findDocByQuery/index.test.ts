import 'jest';
import { Unit } from "./index.js";
import { JobQuery } from "../../../../utils/types.js";

describe("testing findManyDoc at Job", ()=>{
    //@ts-ignore
    it("should return matched Jobs", async()=>{
        const query: JobQuery = {
            
        };
        const testResponse = await Unit({query});
        expect(testResponse).toBeDefined();
    })
})
