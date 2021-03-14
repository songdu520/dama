TypeScript不是一门新的语言，它是用来规范js的
js依旧弱类型语言

ts是js的一个超集，广义的js三部分（dom，bom，EcmaScript）,EcmaScript的超集
比如说 强类型 面向对象的开发体系

ts主要用在大型项目里，使得代码更加规范，协作更加友好，维护更加快捷



特点：
  增加了静态类型检查，增强了代码的健壮性
  是编写时报错，js是执行时报错
  使得重构更加安全和便捷
  多人协作的时候，提高生产力，降低维护成本


编译ts
  全局安装            cnpm i typescript -g
  变成成js            tsc ./src/app.ts --outFile ./dist/app.js
  添加ts的配置文件     tsc --init