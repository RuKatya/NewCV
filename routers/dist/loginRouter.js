"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginCont_1 = require("../controllers/loginCont");
var router = express_1.Router();
router.get("/login", loginCont_1.hendleLogin);
module.exports = router;
