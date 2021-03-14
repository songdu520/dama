const http = require('http')
let port = 8888
let server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.write('你好')
    res.end()
})
server.listen(port, () => {
    console.log(`http server running on http://localhost:${port}`)
})