const { readFile } = require('./library/readfile');

// readFile('index.html').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// 异步处理方法 promise

// es7 async/await

// async 用于函数 表示函数中有异步操作
// await 表示 需要等待的异步操作 配合promise使用

(async() => {
    let data = await readFile('index.html');
    let data2 = await readFile('eg01.readfile.js');

    console.log(data);
    console.log(data2);
})();