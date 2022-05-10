import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { connectDB } from './connectDB';
const app = express(); //express

const PORT = process.env.PORT ?? 5457; //connect to port 5457
require('dotenv').config()

app.use(express.static('my-cv/build')) //static

connectDB()

try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`)
    })
} catch (err) {
    console.log(err)
}