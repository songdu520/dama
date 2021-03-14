class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }
}

let a = 10;
let b = 8;

// module.exports = Student; // 导出模块

module.exports = { Student, a, b };
// module.exprots = { Student: Student, a: a, b: b }