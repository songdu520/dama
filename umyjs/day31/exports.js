function fn() {
    console.log(1)
}
let a = 1
let b = 2
class person {

    constructor(name, age) {
        this.name = 'zhang'
        this.age = 20

    }
    init() {
        console.log('我叫' + this.name + '我今年' + this.age + '岁')
    }
}
module.exports = {
    fn,
    a,
    person
}