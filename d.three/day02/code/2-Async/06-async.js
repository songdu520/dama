/*
  async 是es6提出的草案，es8出现的
  async 函数是什么？一句话，它就是 Generator 函数的语法糖。

  async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已

  1. 内置执行器
  2. 更好的语义
  3. 更广的适用性
  4. 返回值是 Promise
*/

const fs = require('fs');

function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'UTF8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

async function fn() {
  const res = await read('./01-events.html');
  console.log(res);
  const res1 = await read('./02-callback.js');
  console.log(res1);
}

fn();