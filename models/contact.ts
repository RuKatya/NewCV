import { Schema, model } from "mongoose";

const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Must include name"]
    },
    email: {
        type: String,
        required: [true, "Must to include email"]
    },
    message: {
        type: String
    }
})

const Contact = model("Contact", ContactSchema)
export default Contact