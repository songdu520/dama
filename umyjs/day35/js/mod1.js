let age = 100
define([], function() {
    let name = 'zhangsan'
    return {
        name: name,
        age: age,
        show: function() {
            console.log('我是mod1里的方法')
        }

    }
})