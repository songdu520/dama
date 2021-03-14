//一.require 调用模块， 接收二个参数。
// /rɪˈkwaɪər/需要；要求；命令
// 第1个参数是一个数组， 表示所依赖的模块(调用模块)，模块已经被调用
// 第2个参数是一个回调函数， 当前面指定的模块都加载成功后， 回调函数将被调用。回调函数的参数就是模块返回的对应值

// require(['mod1', 'mod2'], function(m1, m2) { //m1:mod1模块返回的对象   m2:mod2返回的对象。
//     //访问第一个模块的返回的值
//     console.log(m1.name);
//     console.log(m1.age);
//     m1.showname();
//     console.log(m2.rannum(1, 5));
// });


// require(['mod3'], function(m3) {
//     m3.showcolor();
// });

// require(['mod3']);

//页面中出现多个require进行调用模块

//二.配置模块（路径），模块已经做好了，如果将模块通过路径引入
// require.config({ })   配置模块.
//         /kənˈfɪɡ/配置，布局

//jquery模块 - 支持AMD的，内部做了设置，jquery模块的名称只能叫做"jquery"
//https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.min.js
//jquery.cookie.js模块
//https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.0/jquery.cookie.min.js
//jquery.lazyload.js模块
//https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.8.3/jquery.lazyload.min.js

// require.config({
//     // baseUrl: '', //公共的路径，基路径，所有模块共有的路径
//     paths: { //模块路径,路径引入后缀名必须忽略，配置里面已经存在后缀名（扩展名）。
//         'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
//         'jq_cookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.0/jquery.cookie.min',
//         'jq_lazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.8.3/jquery.lazyload.min'
//     },
//     shim: { //不支持AMD模块，支持AMD
//       /ʃɪm/ 垫片
//         'jq_cookie': {
//             deps: ['jquery'], //模块的依赖
//             exports: 'jq_cookie'//暴露的名称
//         },
//         'jq_lazyload': {
//             deps: ['jquery'], //模块的依赖
//             exports: 'jq_lazyload'
//            /'ɛksport/ 主配置文件,出口
//         }                                    
//     }
// });

//加载模块
// require(['jquery'], function() {
//     // require(['mod4']);
// });


require(['mod5']);