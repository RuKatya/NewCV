import { Schema, model } from "mongoose";

const PorjectSchema = new Schema({
    title: {
        type: String,
    },
    usedTo: {
        type: Array,
    },
    desc: {
        type: String,
    },
    mainImg: {
        type: String
    },
    subImg: {
        type: Array,
        data: Buffer
    },
    url: {
        type: String
    },
    github: {
        type: String
    }
})

const Project = model("Project", PorjectSchema)
export default Project