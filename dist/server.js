"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB_1 = require("./connectDB");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('dotenv').config();
const app = express_1.default(); //express
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5457; //connect to port 5457
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
connectDB_1.connectDB();
app.use(express_1.default.static('my-cv/build')); //static
app.use('/images', express_1.default.static('my-cv/public/img')); //static
const indexRout = require('./routers/projectRout');
const contactRout = require('./routers/contactRout');
const loginRout = require('./routers/loginRout');
app.use('/', indexRout);
app.use('/', contactRout);
app.use('/personal', express_1.default.static('personal')); //static
app.use('/auth', loginRout);
try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`);
    });
}
catch (err) {
    console.log(err);
}
