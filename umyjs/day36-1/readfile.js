const fs = require('fs')
const path = require('path')

// fs.writeFile('./hehe/index.html', 'hehhe', (err) => {
//     if (err) throw err
//     console.log('创建成功')
// })
// let javascript = `
//     <script>
//         alert(123);
//     </script>
// `;
// fs.appendFile('./hehe/index.html', javascript, (err) => {
//     if (err) throw err
//     console.log('添加成功')
// })

// fs.readFile('./hehe/index.html', (err, docs) => {
//     if (err) throw err;
//     console.log(toString(docs))
// })
// fs.rmdir('./hehe', (err) => {
//     if (err) throw err;
//     console.log('目录删除成功');
// })
// console.log(fs.readdirSync(('./hehe')))
// fs.readdirSync('./hehe').map(value => {
//     console.log(value)
//     fs.unlink(`./hehe/${value} `, (err) => {
//         if (err) throw err;
//         console.log('证件删除')
//     })
// })
//1.利用http模块构建web服务器。

// const http = require('http');
// const host = 'localhost'; //主机 127.0.0.1
// const port = 3000; //端口  1-65000

// const server = http.createServer((request, response) => { //回调函数。
//     // request:请求
//     // response:响应
//     // 设置常用响应。
//     response.writeHead(200, { //设置响应头，里面一般设置文档类型，设置字符编码...  200http状态码。
//         'Content-type': 'text/html;charset=utf8'
//     });
//     response.write('hello,webserver1'); //将括号里面的字符串信息输出到web服务器中，包含标签解析。
//     response.write('<hr>'); //将括号里面的字符串信息输出到web服务器中，包含标签解析。
//     response.write('hello,webserver2'); //将括号里面的字符串信息输出到web服务器中，包含标签解析。
//     response.end(); //服务器响应已经结束了。如果不添加服务器一直运行。括号里面也可以输出信息，和write一样。
// });

// //监听web服务器
// server.listen(port, host, () => { //回调函数输出一些提示信息。。告诉我们服务器已经启动
//     console.log(`The server is running at http://${host}:${port}`);
//     //http://localhost:3000
// });

// //简写风格
// // http.createServer().listen()

// const url='http://api.k780.com/?app=weather.realtime&weaid=1&ag=today,futureDay,lifeIndex,futureHour&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json'
// http.get(url,(res)=>{
//     const {}

// })

// const host = 'localhost'; //主机 127.0.0.1
// const port = 3000; //端口  1-65000

// let server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html;charset=utf8'
//     })
//     res.write('<h1>你是</h1>')
//     res.end()
// })
// server.listen(port, host, () => {
//     console.log(`The server is running at http://${host}:${port}`)
// })
// const http = require('http')
// const port = 2000
// const host = 'localhost'
// let server = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
//     res.write('<h1>你好世界</h1>')
//     res.end()
// })
// server.listen(port, host, () => {
//     console.log(`the server is running at http://${host}:${port}`)
// })