const express = require('express')
const path = require('path')
const app = express() //
const usersRouter = require('./router/user')
const conf = {
    host: 'localhost',
    port: 8088
}

app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)
app.listen(conf.port, conf.host, () => {
    console.log(`server is running on http://${conf.host}:${conf.port}`)
})