import mongoose from "mongoose";
import dontenv from 'dotenv'
dontenv.config();

const MONGODB_SECRET = process.env.MONGODB_SECRET as string;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'task-maker',
}
export const connectToDb =async() =>{
    try {
        const response = await mongoose.connect(MONGODB_SECRET, config);
        console.log(">>>success connectToDb at db", typeof response);
        return response
    } catch(err){
        console.log(">>>error catched connectToDb at db", err);
    }   
}