// 流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。
///striːm/ 流
const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'files/10.txt'));
const writeStream = fs.createWriteStream(path.join(__dirname, 'files/20.txt'));

readStream.pipe(writeStream);