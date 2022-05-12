"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginCont_1 = require("../controllers/loginCont");
var router = express_1.Router();
router
    .post("/login", loginCont_1.hendleLogin)
    .post("/reg", loginCont_1.hendleReg);
module.exports = router;
