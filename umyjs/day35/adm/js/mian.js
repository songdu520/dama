require(['mod1'], function(m1) { //m1:mod1模块返回的对象   m2:mod2返回的对象。
    //访问第一个模块的返回的值
    console.log(m1.name);

});