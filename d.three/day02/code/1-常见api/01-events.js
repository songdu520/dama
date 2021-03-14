// 大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。

// events模块是一个类
const EventEmitter = require('events');

// MyEmitter继承了EventEmitter的大类
class MyEmitter extends EventEmitter {}

// 创建实例
const myEmitter = new MyEmitter();

// eventEmitter.on() 用于注册监听器， eventEmitter.emit() 用于触发事件。
myEmitter.once('event123', (a, b) => {
  console.log('触发事件', a, b);
});
myEmitter.emit('event123', 111, 555);
myEmitter.emit('event123', 222);
myEmitter.emit('event123');

// eventEmitter.once()  用于注册监听器,但是只能被触发一次