const http = require('http')
let port = 8088;
let server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.write('<h1>你好世界</h1>')
    res.end()
})

server.listen(port, () => {
    console.log(`http server running on http://localhost:${port}`)
})