"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var PorjectSchema = new mongoose_1.Schema({
    title: {
        type: String
    },
    usedTo: {
        type: Array
    },
    desc: {
        type: String
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
});
var Project = mongoose_1.model("Project", PorjectSchema);
exports["default"] = Project;
