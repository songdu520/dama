// 用http模块启动静态服务
const http = require('http');

const PORT = 3000;
const HOST_NAME = '127.0.0.1';

const data = '{"name": "zhangsan","sex": 1}'

http.createServer((req, res) => {
  // req: request  请求   前端发来的东西
  // res: response 响应   返回给前端的内容
  res.writeHead(200, {
    // charset=UTF-8用来解决乱码
    'content-type': 'application/json;charset=UTF-8'
  })
  // res.write('<h1>hello 世界</h1>');
  res.write(data);
  // 句柄函数（表示结束了）
  res.end();
}).listen(PORT, HOST_NAME, () => {
  console.log(`the server is running at http://${HOST_NAME}:${PORT}`);
});

// 监听
// server.listen(PORT, HOST_NAME, () => {
//   console.log(`the server is running at http://${HOST_NAME}:${PORT}`);
// });


// http常见的媒体类型
// .htm .html	HyperText Markup Language (HTML)	         text/html
// .txt	Text, (generally ASCII or ISO 8859-n)	           text/plain
// .json	JSON format	                                   application/json
// .png	Portable Network Graphics	                       image/png
// .jpeg .jpg	JPEG images	                               image/jpeg
// .xls	Microsoft Excel	                                 application/vnd.ms-excel
// .xlsx	Microsoft Excel (OpenXML)	                     application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
// .pdf	Adobe Portable Document Format (PDF)	           application/pdf
// .zip	ZIP archive	                                     application/zip