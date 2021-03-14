//全局属性
console.log(__dirname); // 获得当前文件所在目录的绝对路径
console.log(__filename); // 获得当前文件的绝对路径


//fs模块
//引入fs模块 - 内置模块
const fs = require('fs');

//1.创建文件目录
// fs.mkdir('./hehe', (err) => { //Node.js回调一般都是错误优先
//     if (err) throw err;
//     console.log('文件目录创建成功');
// });

//2.创建文件，写入内容。
// fs.writeFile(文件路径和名称,写入的内容,callback)
// let str = `
//         <!DOCTYPE html>
//         <html lang="en">

//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>

//         <body>
//             <a href="http://www.baidu.com">百度</a>
//         </body>
//         </html>
// `;
// fs.writeFile('./hehe/index.html', str, (err) => {
//     if (err) throw err;
//     console.log('文件创建成功');
// })

//3.追加内容
// let javascript = `
//     <script>
//         alert(123);
//     </script>
// `;
// fs.appendFile('./hehe/index.html', javascript, (err) => {
//     if (err) throw err;
//     console.log('文件创建成功');
// });

//4.读取文件内容
// fs.readFile('./hehe/detail.html', (err, docs) => { //docs:表示页面中的内容数据。
//     if (err) throw err;
//     console.log(docs.toString()); //toString将编码转换成字符串。
// });

// fs.readFile('./hehe/detail.html', 'utf8', (err, docs) => { //docs:表示页面中的内容数据。
//     if (err) throw err;
//     console.log(docs); //toString将编码转换成字符串。
// });

//5.删除目录 - 删除空目录。
fs.rmdir('./hehe', (err) => {
    if (err) throw err;
    console.log('目录删除成功');
});

//6.删除文件 - 多个文件删除遍历操作。
//删除单个文件：unlink
// console.log(fs.readdirSync('./hehe')); //同步获取目录下面的文件，返回数组。[ 'detail.html', 'index.html' ]
// fs.readdirSync('./hehe').map(value => {
//     fs.unlink(`./hehe/${value}`, (err) => {
//         if (err) throw err;
//         console.log('文件删除成功');
//     })
// });