// const http = require('http')
// const fs = require('fs')
// http.get('http://api.k780.com/?app=weather.realtime&weaid=1&ag=today,futureDay,lifeIndex,futureHour&appkey=54251&sign=ab723fdb822c380cd4f0daef4b762476&format=json', (res) => {
//     const { statusCode } = res;
//     const contentType = res.headers['content-type'];

//     let error;
//     // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
//     if (statusCode !== 200) {
//         error = new Error('请求失败\n' +
//             `状态码: ${statusCode}`);
//     } else if (!/^application\/json/.test(contentType)) {
//         error = new Error('无效的 content-type.\n' +
//             `期望的是 application/json 但接收到的是 ${contentType}`);
//     }
//     if (error) {
//         console.error(error.message);
//         // 消费响应的数据来释放内存。
//         res.resume();
//         return;
//     }

//     res.setEncoding('utf8');
//     let rawData = '';
//     res.on('data', (chunk) => { rawData += chunk; });
//     res.on('end', () => {
//         try {

//             console.log(rawData);
//             // fs.writeFile('hehe.html', rawData + '\n', () => {
//             //     if (err) throw err
//             //     console.log('写入成功')
//             // })

//         } catch (e) {
//             console.error(e.message);

//         }
//     });
// }).on('error', (e) => {
//     console.error(`出现错误: ${e.message}`);
// });