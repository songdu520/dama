// callback 回调
// 将一个函数作为参数 传入到另外一个函数中使用
// 回调可以改变代码的执行顺序

function isOdd(num, callback) {
    if (typeof num != 'number') {
        callback(new Error('参数不是数字'));
    } else if (parseInt(num) === num) {
        if (num % 2) {
            callback(null, '奇数'); // null 表示没有错误
        } else {
            callback(null, '偶数');
        }
    }
}

// isOdd('abc', function(str) {
//     console.log(str);
// });

// 在nodejs中所有的异步操作都是使用回调实现的
// 并且nodejs和用户有一个约定
// 所有的异步回调 都是错误优先(回调函数的第一个参数是错误参数)
// 在回调中需要优先做错误判断


// isOdd('5', function(err, str) {
//     if (err) throw err; //throw 抛出异常 JS引擎会终止代码的执行
//     console.log(str);
// })

isOdd(3, function(err, str) {
    if (err) throw err; //throw 抛出异常 JS引擎会终止代码的执行
    console.log(str);
})