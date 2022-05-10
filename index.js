const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT ?? 7171; //connect to port 7171
const color = require('colors')

app.use(express.static(path.resolve(__dirname, 'public'))) //static

//ROUTER
const index = require('./router/index')

app.use('/', index)

try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}