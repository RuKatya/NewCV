//EXPRESS
const express = require('express');
const app = express();
//PATH
const path = require('path')
//BODYPARSER
const bodyParser = require('body-parser')
//KEYS
const keys = require('./keys')
//PORT
const PORT = process.env.PORT ?? 7171; //connect to port 6565
//MONGOOSE
// const mongoose = require('mongoose')
//COLORS
const color = require('colors')
//COMPRESSION
const compression = require('compression')
//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))

app.use(bodyParser.urlencoded({ extended: false })) //bodyParser
app.use(express.static(path.resolve(__dirname, 'public'))) //static

//Middleware
app.use(compression())

//ROUTER
const index = require('./router/index')
// const login = require('./route/login')
// const remembers = require('./route/remembers')
// const profile = require('./route/profile')

app.use('/', index)
// app.use('/auth', login)
// app.use('/remembers', remembers)
// app.use('/profile', profile)

// app.use(errorMiddleware) //page 404

//CONNECT TO PORT
try {
    // mongoose.connect(keys.MONGODB_URI, {
    //     useNewUrlParser: true,
    //     useFindAndModify: false
    // }, () => {
    //     console.log(color.bgGreen.black(`DATA CONNECTED`))
    // })

    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}