const express = require('express')
const conf = {
    port: 8888,
    host: 'localhost'
}
let app = express()
app.get('/users', (req, res, next) => {

    res.json({ username: 'lisi', age: 20 })
})
app.listen(conf.port, conf.host, () => {
    console.log(`apiserver is running on  http://${conf.host}:${conf.port}`)
})