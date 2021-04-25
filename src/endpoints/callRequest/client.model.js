import mongoose from "mongoose";
const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: String,
    email: String,
    number: String,
    description: String,
    date: String,
});

export default mongoose.model(
    "Client",
    clientSchema
);