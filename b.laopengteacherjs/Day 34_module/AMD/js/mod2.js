// define 定义模块，接收二个参数.
// 第1个参数，必须是一个数组，指明该模块的依赖性，没有依赖也不能省略。
// 第2个参数是一个回调函数。


//切记：每个 JavaScript 文件就是一个独立的模块，一个模块里面只能有一个define..
define([], function() {
    return { //暴露模块返回的应用
        rannum: function(min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        }
    }
});