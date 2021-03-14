require(['config'], function() { //调用文件
    require(['jquery', 'jq_cookie', 'jq_lazyload'], function() { //调用模块
        console.log($);
        $.cookie('username', 'module');
    });
});