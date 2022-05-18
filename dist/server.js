"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB_1 = require("./connectDB");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('dotenv').config();
const app = express_1.default(); //express
const PORT = process.env.PORT || 5458; //connect to port 5457
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
const config = {
    server: {
        port: PORT
    }
};
try {
    app.listen(config.server.port, () => {
        console.log(`Server listen on http://localhost:${PORT}`);
    });
}
catch (err) {
    console.log(err);
}
