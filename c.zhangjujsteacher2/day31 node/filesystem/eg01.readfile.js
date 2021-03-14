const fs = require('fs');
const path = require('path');

// 读取文件
// 读取文件需要文件路径
// 前端相对  后端绝对

// console.log(__dirname + './index.html'); // 处理路径麻烦

let url = path.join(__dirname, 'index.html');
// console.log(url);

// console.log(1);
// fs.readFile(url, 'utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(2);
//     console.log(data);
// });
// console.log(3);


let data = fs.readFileSync(url, 'utf8'); // 同步方法
console.log(data);