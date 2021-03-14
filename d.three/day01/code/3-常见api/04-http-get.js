// 使用http模块进行get请求
const https = require('https');
const http = require('http');

// https.get('https://www.taobao.com', res => {
//   // 监听接受到内容
//   // Buffer是十六进制
//   let result = '';
//   let count = 0;
//   res.on('data', chunk => {
//     result += chunk;
//     count++;
//   })
//   // 监听内容结束
//   res.on('end', () => {
//     console.log(result);
//     console.log(count);
//   })
// });

http.createServer((request, response) => {
  https.get('https://m.maoyan.com/ajax/movieOnInfoList', res => {
    let result = '';
    res.on('data', chunk => {
      result += chunk;
    })
    res.on('end', () => {
      response.writeHead(200, {
        'content-type': 'application/json;charset=UTF-8'
      })
      response.write(result);
      response.end();
    })
  });
}).listen(4000);