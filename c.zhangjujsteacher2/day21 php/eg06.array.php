<?php
    // 如果需要在浏览器现是页面 text/html
    // 如果内容是JSON      application/json
    header('content-type:application/json;charset=utf-8');

    // 二维数组
    // 外层数组索引数组 内层数组关联数组
    $data = array(
        array(
            'bookName'=>'JavaScript高级程序设计(第四版)',
            'price'=>86.5,
            'num'=>30
        ),
        array(
            'bookName'=>'ES6标准入门 第三版',
            'price'=>77,
            'num'=>25
        ),
        array(
            'bookName'=>'JavaScript 忍者秘籍 第二版',
            'price'=>85,
            'num'=>36
        ),array(
            'bookName'=>'PHP从入门到入土',
            'price'=>99.8,
            'num'=>130
        )
    );

    // var_dump($data);

    $json = json_encode($data);

    echo $json;

?>