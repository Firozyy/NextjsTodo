import mongoose from "mongoose";

export const conectDb = async () => {
mongoose.connect("mongodb+srv://Firos:firos@cluster0.chwxqah.mongodb.net/nextjstodo?retryWrites=true&w=majority")
console.log("db conected");

};