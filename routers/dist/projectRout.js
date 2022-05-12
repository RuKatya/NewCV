"use strict";
exports.__esModule = true;
var express_1 = require("express");
var projectsCont_1 = require("../controllers/projectsCont");
var router = express_1.Router();
router
    .get('/getProjects', projectsCont_1.hendleGetAllProjects)
    .post('/sendNewProject', projectsCont_1.hendleAddProject);
module.exports = router;
