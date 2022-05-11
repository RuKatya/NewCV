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
    img: {
        type: String
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