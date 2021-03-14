//同事A
;
! function() {
    var a = 10;
    console.log(a);
}();
//同事B
! function() {
    var a = 10;
    console.log(a);
}();
//同事C
! function() {
    var a = 10;
    console.log(a);
}();
//同事D
! function() {
    var a = 10;
    console.log(a);
}();
//同事E
! function() {
    var a = 10;
    console.log(a);
}();

console.log('---------------------------------------------------');;
(function() {
    var b = 1;
    console.log(b);
})();
(function() {
    var b = 1;
    console.log(b);
})();
(function() {
    var b = 1;
    console.log(b);
})();
(function() {
    var b = 1;
    console.log(b);
})();
console.log('-------------------------------------------------------');

//命名空间写法 - 名称太长了
const taobao = {};
taobao.aliyingye = {}
taobao.aliyingye.item3 = {}
taobao.aliyingye.item3.zhangsan = {}
taobao.aliyingye.item3.zhangsan = {
    tool: function() {
        console.log('tool');
    }
};