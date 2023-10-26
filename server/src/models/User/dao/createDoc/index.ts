import User from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { UserDocument, IndexParameter } from "../../../../utils/types.js";

const functionName = "createDoc"
const modelName = "User"
export const Unit =async({document}:IndexParameter<UserDocument>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);

        console.log(`>>>${functionName} at ${modelName}`);
        const newDocument = new User(document);
        console.log(">>>response", typeof newDocument);

        return newDocument.save();
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

