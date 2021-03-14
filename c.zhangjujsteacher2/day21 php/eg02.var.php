<?php

    header('content-type:text/html;charset=utf-8');

    // php是一个弱类型语言
    // 在变量声明时 不需要指定数据类型 由赋值操作来决定数据类型
    // 变量命名采用 驼峰命名法
    // JS的变量声明 var let const
    // PHP中的变量以 $ 开头 无需声明  直接赋值

    // $userName = 'zhangsan';

    // . 操作符 字符连接符
    // echo $userName.'你好';
    // echo '<br>';

    // php中的字符串 可以是单引号  也可以是双引号
    // 双引号可以识别变量(类似于JS的模板字符串)

    // echo "$userName 你好";


    $userName = 'lisi';
    $age=22;
    $bool = true;
    $n = null;
    $PI = 3.14;


    // 输出语句 var_dump(); 输出变量并给出数据类型

    var_dump($userName);
    var_dump($age);
    var_dump($bool);
    var_dump($n);
    var_dump($PI);

?>