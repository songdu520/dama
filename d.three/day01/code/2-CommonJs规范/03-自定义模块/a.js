// es6规定，在对象里面，如果属性和属性值相同，可以简写
// 如果属性值是函数，可以省略冒号和function

let name = 'beijing'

let obj = {
  name,
  age: 18,
  sayName() {
    console.log(this.name);
  },
  changeAge() {
    this.age = 19;
  }
};

module.exports = obj;