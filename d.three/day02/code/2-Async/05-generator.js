/*
  Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

  形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。


  Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

  执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。


  Generator最好配合promise一起使用
*/


// function* fn() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
//   return 'd';
// };

// // f是一个遍历器对象
// const f = fn();

// // 需要调用遍历器对象的next()方法
// console.log(f.next()); // { value: 'a', done: false }  // done 表示还没有结束
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());


//需要引入co 模块是generator的执行器，帮助generat依次执行异步操作
const fs = require('fs');
const co = require('co');

function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'UTF8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    })
}

function fnn() {
    return new Promise((resolve, reject) => {
        resolve(111);
    })
}


function* fn() {
    yield read('./01-events.html').then(res => console.log(res));
    yield read('./02-callback.js').then(res => console.log(res));
    yield fnn().then(res => console.log(res));
}

co(fn).then(function() {
    console.log('Generator 函数执行完成');
});

// const f = fn();

// f.next();
// f.next();
// f.next();