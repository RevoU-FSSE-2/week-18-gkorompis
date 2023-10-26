import Job from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { JobQuery, IndexParameter } from "../../../../utils/types.js";

const functionName = "udpateDoc"
const modelName = "Job"

export const Unit =async({query, update}:IndexParameter<JobQuery>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);
        
        const setUpdate = update || {};
        const response = await Job.updateOne(query, {$set:setUpdate} );
        console.log(">>>response", response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

