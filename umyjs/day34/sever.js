const http = require('http')
const fs = require('fs')
const path = require('path')
let port = 8080
let server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') return
    console.log(`${req.method}${req.headers.host}`)
    switch (path.extname(req.url)) {
        case '.css':
            res.writeHead(200, { "content-type": "text/css;charset=utf-8" });
            break;
        case '.js':
            res.writeHead(200, { "content-type": "text/javascript;charset=utf-8" });
            break;
        default:
            res.writeHead(200, { "content-type": "text/html;charset=utf-8" });

    }
    switch (req.url) {
        case '/':
            fs.readFile(path.join((_dirname, 'public')))
    }
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end('<h1>你好时节</h1>')
})
server.listen(port, () => {
    console.log(`http sever running on http://localhost:${port}`)
})