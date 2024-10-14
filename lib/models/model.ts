import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";

 const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, discription: {
        type: String,
        required: true,
    }
    , isComplted: {
        type: Boolean,
        default: false,
    },
},{timestamps:true})


 const toDomodel = mongoose.models.todo || mongoose.model("todo",schema);
 export default toDomodel;