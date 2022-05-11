"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var Router_1 = require("./Router/Router");
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(Router_1["default"], null)));
