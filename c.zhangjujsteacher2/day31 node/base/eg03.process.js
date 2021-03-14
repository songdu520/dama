// process 在nodejs中是一个全局对象

// 所有 终端命令  是应用程序
// 应用 参数1 参数2
// node eg02
// cd day31

// console.log(process.argv);

let argv = process.argv.slice(2);

switch (argv[0]) {
    case 'install':
        console.log('正在安装' + argv[1]);
        break;
    case 'init':
        console.log('项目正在初始化');
        break;
    case 'uninstall':
        console.log('正在卸载' + argv[1]);
        break;
    case '--help':
        console.log('打印帮助信息');
        break;
    default:
        console.log('参数错误');

}