import Job from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { JobDocument, IndexParameter } from "../../../../utils/types.js";

const functionName = "createDoc"
const modelName = "Job"
export const Unit =async({document}:IndexParameter<JobDocument>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);

        console.log(`>>>${functionName} at ${modelName}`);
        const newDocument = new Job(document);
        console.log(">>>response", typeof newDocument);

        return newDocument.save();
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

