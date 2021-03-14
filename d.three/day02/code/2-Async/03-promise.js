// promise是一个es6新增的用于解决异步的方案
// promise有三种状态  pending  fulfilled  rejected, 不可逆的
// 有两个参数，resolve: 成功的回调  reject： 失败的回调
// then 成功  catch 失败  finally 无论成功失败  all 都成功 race 第一个返回的结果



// 创建promise
// let done = false;
// const p1 = new Promise((resolve, reject) => {
//   if (done) {
//     resolve('ok')
//   } else {
//     reject('不ok')
//   }
// })

// const p2 = new Promise((resolve, reject) => {
//   if (done) {
//     resolve('好')
//   } else {
//     reject('不好')
//   }
// })

// 消费promise
// p1
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log(123)
//   })

// Promise.all([p1, p2])
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })


// Promise.race([p1, p2])
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })




const fs = require('fs');

function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'UTF8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

read('./01-events.html')
  .then(res => {
    console.log(res);
    return read('./02-callback.js')
  })
  .then(res => {
    console.log(res)
    return read('./03-promise.js')
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })