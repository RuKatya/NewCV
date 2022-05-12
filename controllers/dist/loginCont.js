"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.hendleLogin = exports.hendleReg = void 0;
var jwt_simple_1 = require("jwt-simple");
var user_1 = require("../models/user");
var bcryptjs_1 = require("bcryptjs");
exports.hendleReg = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, hashpassword, hashrole, newUser, result, error_1, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                console.log(req.body.userData);
                _a = req.body.userData, name = _a.name, password = _a.password;
                console.log(name, password);
                if (!(name && password)) return [3 /*break*/, 6];
                return [4 /*yield*/, bcryptjs_1["default"].hash(password, 10)];
            case 1:
                hashpassword = _b.sent();
                return [4 /*yield*/, bcryptjs_1["default"].hash(process.env.ROLE, 10)];
            case 2:
                hashrole = _b.sent();
                _b.label = 3;
            case 3:
                _b.trys.push([3, 5, , 6]);
                newUser = new user_1["default"]({ name: name, password: hashpassword, role: hashrole });
                return [4 /*yield*/, newUser.save()];
            case 4:
                result = _b.sent();
                res.send(result);
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.log(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 6];
            case 6: return [3 /*break*/, 8];
            case 7:
                error_2 = _b.sent();
                console.log(error_2);
                res.send({ error: error_2.message });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.hendleLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, user, areSame, payload, token, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                console.log(req.body.userData);
                _a = req.body.userData, name = _a.name, password = _a.password;
                console.log(name, password);
                if (!name) return [3 /*break*/, 3];
                return [4 /*yield*/, user_1["default"].findOne({ name: name })];
            case 1:
                user = _b.sent();
                console.log(user);
                return [4 /*yield*/, bcryptjs_1["default"].compare(password, user.password)];
            case 2:
                areSame = _b.sent();
                if (areSame) {
                    res.cookie("userInfo", { name: name, id: user._id, role: user.role }, { maxAge: 60 * 60 * 1000 });
                    payload = { name: name, id: user._id, role: user.role };
                    token = jwt_simple_1["default"].encode(payload, process.env.SECRET);
                    res.cookie("userInfo", token, { maxAge: 360000 });
                    res.send({ ok: true, login: true });
                    return [2 /*return*/];
                }
                throw new Error("username or password are inncorect");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                console.log(error_3.message);
                res.send({ error: error_3.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
