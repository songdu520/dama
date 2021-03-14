//定义模块
//export命令用于规定模块的对外接口。暴露模块
let name = 'zhangsan';

let obj = {
    a: 1,
    b: 2,
    c: 3
};

function fn() {
    console.log('我是函数');
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    init() {
        return this.name + this.age;
    }
}

//暴露模块，定义模块
export {
    // /ˈekspɔːrt/输出
    name,
    obj,
    fn,
    Person
}