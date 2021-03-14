// const jsobj = require('./createselfmodule.js'); //调用或者加载自定义的模块。./表示当前目录下面。
//这里的模块前面的./表示配置模块，引入模块的路径，如果没有./,系统会去node_modules目录下查找。//后面js后缀也可以省略
// jsobj.fn();
// console.log(jsobj.name);



//最常用的写法就是[解构赋值]的写法
// const { fn, name, Person } = require('./createselfmodule.js');
// fn();
// console.log(name);
// console.log(new Person('王五', 1000).init());