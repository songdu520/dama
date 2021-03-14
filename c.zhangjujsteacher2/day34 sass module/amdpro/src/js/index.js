// 当使用AMD模块规范(requirejs)时
// 每个页面只有一个入口文件需要引入
// 入口文件写在 data-main 属性中
// 其他的JS文件均为模块

// 入口文件是配置文件

require.config({
    // paths 是模块路径
    // paths 里的路径js文件默认不写后缀
    baseUrl: '../js/library',
    paths: {
        'jquery': 'jquery',
        'nav': 'nav',
        'md5': 'jquery.md5'
    },
    shim: {
        // 设置插件的互相依赖
        md5: ['jquery']
    }
});

// require函数
// require(arr,callback)
// arr 依赖列表
// callback 参数的参数名是 注入列表
// 概念 依赖注入

// require(['jquery'], function($) {
//     // console.log($);

//     $('#btn').on('click', function() {
//         alert(1);
//     })
// });

// require(['nav'], function(nav) {
//     console.log(nav);

//     // nav.sayHello();

//     nav.addEvent('#btn', 'click');
//     console.log($);
// });


require(['jquery', 'md5'], function($, md5) {
    console.log($.md5('123132asdygre'));
})