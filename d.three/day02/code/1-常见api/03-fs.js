// fs  文件系统file system，用于操作文件

const fs = require('fs');
const path = require('path');

// 创建文件
// fs.writeFile(path.join(__dirname, 'data.txt'), 'hello world', (err) => {
//   // 一共三个参数，第一个是路径及名称，第二个是内容，第三个是回调函数
//   if (err) throw err;
//   console.log('文件创建成功');
// });

// try {
//   fs.writeFileSync(path.join(__dirname, 'data.txt'), 'hello world');
// } catch (err) {
//   console.log(err);
// }


// 修改文件
// fs.appendFile(path.join(__dirname, 'data.txt'), '\n你好', (err) => {
//   if (err) throw err;
//   console.log('文件修改成功');
// })

// fs.appendFileSync


// 读取文件
// fs.readFile(path.join(__dirname, 'data.txt'), 'UTF8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.readFileSync


// 删除文件
// fs.unlink(path.join(__dirname, 'data.txt'), err => {
//   if (err) throw err;
//   console.log('文件删除成功');
// })

// fs.unlinkSync


// 创建文件夹
// fs.mkdir(path.join(__dirname, 'files'), err => {
//   if (err) throw err;
//   console.log('文件夹创建成功');
// })

// fs.mkdirSync


// 删除文件夹
// fs.rmdir(path.join(__dirname, 'files'), err => {
//   if (err) throw err;
//   console.log('文件夹删除成功');
// })

// fs.rmdirSync


// 循环创建
// for (let i = 0; i < 10; i++) {
//   fs.writeFile(path.join(__dirname, `files/${i}.txt`), i, err => {
//     console.log(`文件${i}创建成功`);
//   });
// };


// 读取文件信息
// fs.readdir('./', (err, dirs) => {
//   if (err) throw err;
//   // console.log(dirs);
//   dirs.forEach(item => {
//     fs.stat(item, (err, stat) => {
//       if (err) throw err;
//       console.log(stat.isDirectory());
//     })
//   })
// });


// 复制文件
// fs.copyFile(path.join(__dirname, 'files/0.txt'), path.join(__dirname, 'files/10.txt'), err => {
//   if (err) throw err;
//   console.log('文件复制成功');
// })

// fs.copyFileSync;



// 修改文件内容
// fs.writeFile(path.join(__dirname, 'files/1.txt'), '5', (err) => {
//   if (err) throw err;
//   console.log('文件修改成功');
// })
// fs.unlink(path.join(__dirname, 'files/1.txt'), err => {
//   if (err) throw err;
//   fs.writeFile(path.join(__dirname, 'files/1.txt'), '999', err => {
//     if (err) throw err;
//     console.log('文件修改成功');
//   })
// });

// try {
//   fs.unlinkSync(path.join(__dirname, 'files/1.txt'));
//   fs.writeFileSync(path.join(__dirname, 'files/1.txt'), '888');
// } catch (err) {
//   throw err;
// }