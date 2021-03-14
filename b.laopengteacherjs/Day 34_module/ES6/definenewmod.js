//export default 命令
//使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
//暴露一个变量或者其他的应用。

//第一种写法
export default function() {
    console.log('foo');
}

//第二种写法
// function foo() {
//     console.log('foo');
// }
// export default foo;