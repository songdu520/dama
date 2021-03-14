let obj = {
  name: 'dehao'
};

let str = 'junjun';

// console.log(module);
// module是指整一个模块
// module对象下面有一个exports对象，exports对象就是暴露出去的对象

// module.exports = str;
exports.obj = obj;
exports.str = str;

console.log(module);