"use strict";
exports.__esModule = true;
var react_1 = require("react");
var EnterPage = function () {
    var colors = [
        "rgb(204, 109, 109)",
        "rgb(204, 198, 109)",
        "rgb(117, 204, 109)",
        "rgb(109, 185, 204)",
        "rgb(109, 96, 223)",
        "rgb(162, 96, 223)",
        "rgb(223, 96, 223)",
    ];
    var SQUARES_NUMBER = 500;
    for (var i = 0; i < SQUARES_NUMBER; i++) {
        var square = document.createElement("div");
        square.classList.add("square");
    }
    return react_1["default"].createElement("div", { className: "container", id: "board" });
};
exports["default"] = EnterPage;
