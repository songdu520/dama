let obj1 = {
  a: 3,
  b: 4,
  c: {
    x: 9
  },
  d: undefined,
  e: function() {}
};

// let obj2 = obj1;

// // console.log(obj2 === obj1);

// obj1.a = 5;

// console.log(obj2);


// 浅拷贝
// let obj2 = {...obj1};
// let obj2 = Object.assign({}, obj1);
// obj1.c.x = 5;
// console.log(obj2);

// 深拷贝
// 1. 递归
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj1.c.x = 5;
// console.log(obj2);
// 3. lodash函数
