//创建一个自定义的模块

function fn() {
    console.log('我是函数');
}

let name = 'zhangsan';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    init() {
        return `我的名字叫做${this.name},我今年${this.age}岁`;
    }
}


//暴露模块、创建模块
module.exports = {
    // /'ɛksport/主配置文件
    fn: fn,
    name: name,
    Person: Person
}