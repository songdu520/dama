// 自定义模块
// define(arr,callback)
// 接收两个参数

// 依赖注入
define(['jquery'], function($) {
    return {
        sayHello: function() {
            console.log('hello');
        },
        addEvent: function(selector, type) {
            $(selector).on(type, function() {
                alert('addevent');
            })
        }
    };
});