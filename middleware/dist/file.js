"use strict";
exports.__esModule = true;
var multer_1 = require("multer");
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
var fileFilter = function (req, file, cb) {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
module.exports = multer_1["default"]({
    storage: storage, fileFilter: fileFilter
});
