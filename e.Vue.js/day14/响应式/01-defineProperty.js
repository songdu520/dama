const obj = {
  a: 3,
  b: 4,
  c: [1, 2]
};

//! Object.defineProperty 方法会直接在对象上面定义一个新的属性，或者直接修改已有的属性，并且返回该对象。
//! 里面有三个参数
//! 1. 对象 2. 属性 3. 描述对象

// let str = null;

// Object.defineProperty(obj, "a", {
//   //! 当你去访问该属性的时候会自动地调用get方法，并且返回get的return值
//   get() {
//     // console.log(7);
//     return str;
//   },
//   //! 当你要修改该属性的值的时候就会自动地调用set方法
//   //! 可以接受一个参数，就是改变的值
//   set(val) {
//     // console.log(val);
//     str = val;
//   }
// });

// obj.a = 5;
// console.log(obj.a);


function observe(data, key, value) {
  Object.defineProperty(data, key, {
    get() {
      console.log(`${key}被取出来了`)
      return value;
    },
    set(val) {
      console.log(`${key}的值从${value}变成了${val}`);
      value = val;
      //! 通知订阅者我改变了，从而触发监听回调
    }
  });
};

Object.keys(obj).forEach((item, index) => {
  observe(obj, item, obj[item])
});

obj.b = 10;
console.log(obj.a);
console.log(obj.b);