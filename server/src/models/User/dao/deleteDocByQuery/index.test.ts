import 'jest';
import { Unit } from "./index.js";
import { UserQuery } from "../../../../utils/types.js";

describe("testing deleteDoc at User", ()=>{
    //@ts-ignore
    it("should delete a doc", async()=>{
        const query: UserQuery = {
            username: 'johndoes',
        };
        const testResponse = await Unit({query});
        expect(testResponse).toBeDefined();
    })
})
