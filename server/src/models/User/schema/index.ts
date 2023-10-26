import mongoose from "mongoose";
import { UserDocument } from "../../../utils/types.js";

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    username: {type:String, required: true, unique: true},
    role: {type:String, enum: ["admin", "officer", "member"], default: "member"},
    password: {type:String, required: true}
})

const User = mongoose.model<UserDocument>('User', userSchema);
export default User;

