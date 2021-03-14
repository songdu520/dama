// 调用模块，使用模块
// import命令用于输入其他模块提供的功能。
///ˈɪmpɔːrt/进口
// 配置模块-> ./(当前目录寻找模块，千万不能省略)

//模块化的核心：解构赋值
import {
    name as hehe, //修改名称
    obj,
    fn,
    Person
} from './definemod.js';

console.log(hehe);
console.log(obj.a);
fn();
console.log(new Person('lisi', 200).init());