//EXPRESS
const express = require('express');
const app = express();
//PATH
const path = require('path')
//PORT
const PORT = process.env.PORT ?? 7171; //connect to port 7171
//COLORS
const color = require('colors')

//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))

app.use(express.static(path.resolve(__dirname, 'public'))) //static

//ROUTER
const index = require('./router/index')

app.use('/', index)

//CONNECT TO PORT
try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}