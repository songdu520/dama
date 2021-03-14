const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const usersRouter = require('./router/users')
let conf = {
    host: '192.168.31.75',
    prot: 6600
}
app.use(express.static(path.join(__dirname, 'src')))

fs.readFile('/', )

// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.use('/users', usersRouter); // 使用路由中间件//以/users作为后端路由根目录调用usersRouter

app.listen(conf.prot, conf.host, () => {
    console.log(`webserver is runing on http://${conf.host}:${conf.prot}`)
})