import express from 'express';
import { connectDB } from './connectDB';
import cookieParser from 'cookie-parser'
// require('dotenv').config()
import keys from './keys'
const app = express(); //express
const PORT = process.env.PORT || 5458; //connect to port 5457
app.use(express.json());
app.use(cookieParser());

connectDB()

app.use(express.static('my-cv/build')) //static
app.use('/images', express.static('my-cv/public/img')) //static

const indexRout = require('./routers/projectRout')
const contactRout = require('./routers/contactRout')
const loginRout = require('./routers/loginRout')

app.use('/', indexRout)
app.use('/', contactRout)
app.use('/personal', express.static('personal')) //static
app.use('/auth', loginRout)

try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`)
    })
} catch (err) {
    console.log(err)
}