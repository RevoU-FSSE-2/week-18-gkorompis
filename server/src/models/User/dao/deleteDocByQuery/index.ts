import User from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { UserQuery, IndexParameter } from "../../../../utils/types.js";

const functionName = "deleteDoc"
const modelName = "User"

export const Unit =async({query}:IndexParameter<UserQuery>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);
        
        const response = await User.deleteOne(query);
        console.log(">>>response", response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

