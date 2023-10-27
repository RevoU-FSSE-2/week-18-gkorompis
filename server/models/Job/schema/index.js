import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    createdBy: { type: String, required: true },
    //@ts-ignore
    stakeholder: { type: Array, default: [function () { return this.createdBy; }] },
    job: { type: String, required: true },
    jobProgress: { type: String, enum: ["todo", "doing", "done"], default: "todo" },
    //@ts-ignore
    permission: { type: Array, default: function () { return ["admin", this.createdBy]; } },
    createdAt: { type: Date, required: true, default: Date.now },
    dueDate: { type: Date },
    isAlert: { type: Boolean, required: true, default: false }
});
const Job = mongoose.model('Job', jobSchema);
export default Job;
