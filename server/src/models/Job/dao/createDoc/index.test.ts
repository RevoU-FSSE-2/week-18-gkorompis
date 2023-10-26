import 'jest';
import { Unit } from "./index.js";
import { JobDocument } from "../../../../utils/types.js";
import { v4 as uuidv4 } from 'uuid';



describe("testing createDoc at Job", ()=>{
    const uniqueId = uuidv4();
    //@ts-ignore
    it("should return new Job Doc", async()=>{
        const document: JobDocument = {
            createdBy: "test_create" + uniqueId,
            stakeholder: ["test_stake" + uniqueId],
            job: "test_job"+uniqueId
        };
        const testResponse = await Unit({document});
        expect(testResponse).toBeDefined();
    })
})
