<?php
    header('content-type:text/html;charset=utf-8');

    // https://www.php.net/manual/zh/book.array.php

    // php 数组 有两种结构
    // 1. 索引数组 
    // 数组中所有的成员都是有序排列 数组中可以存放任意类型的值
    // 最小索引值是0 最大索引值是 长度-1
    // php的索引数组 没有 length 属性

    // $arr = array(1,2,3,4,5,6);
    // echo 是无法输出数组的
    // echo $arr;

    // 输出数组的方式
    // print_r($arr);
    // var_dump($arr);

    // echo count($arr);  // 使用count函数查看数组长度

    // 使用for语句遍历
    // for($i=0;$i<count($arr);$i++){
    //     echo $arr[$i].'<br>';
    // }

    // 使用foreach遍历
    // foreach($arr as $value){  // 类似于js中的for-of
    //     echo $value;
    // }

    // $arr2 = array(1241,14,1263,385,123,45,11,18,52,36);
  
    // $arr3 = array_filter($arr2,function($elm){
    //     return $elm%2 == 0;
    // });

    // array_push($arr3,10);

    // print_r($arr3);

    // ----------------------------------------------------------------
    
    // 2. 关联数组 无序数组
    // 在PHP中 关联数组是由若干键值对构成
    // 语法类似于 JS中的 对象
    // $user = array(
    //     'username'=>'张三',
    //     'age'=>25,
    //     'sex'=>'男'
    // );

    // $phone = array('phoneNumber'=>'13888888888');

    // array_push($user,'phoneNumber'=>'13888888888');

    // $result = array_merge($user,$phone);
    // print_r($result);

    // 将php的关联数组转成JS的JSON格式（JSON字符串）
    // json_encode()

    // $json = json_encode($result);

    $str = '{"username":"\u5f20\u4e09","age":25,"sex":"\u7537","phoneNumber":"13888888888"}';

    // json_decode() 将JSON字符串转成PHP对象
    $data = json_decode($str);

    var_dump($data);

    // echo $json;
?>