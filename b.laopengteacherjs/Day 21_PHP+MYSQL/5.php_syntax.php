<?php
//设置字符编码。
header('content-type:text/html;charset=utf-8');

//1.php的分支循环语句和函数

//分支语句
//isset():检测括号里面的值是否存在，返回布尔值

// echo isset($a);//false 空隙
// $b = 100;
// echo isset($b);//true 1


// if(!isset($a)){
//     echo '$a不存在';
// }else{
//     echo '$a存在';
// }

//循环语句
// $arr1 = Array('zhangsan','lisi','wangwu');
//数组的长度：sizeof()/count()
// for($i=0;$i<sizeof($arr1);$i++){
//     echo $arr1[$i].'<br>';
// }
// $arr2 = Array('name'=>'zhangsan','age'=>100,'sex'=>'男');
// foreach ($arr2  as $key => $value) {
//     echo $key.':'.$value.'<br>';
// }


// function fn($a,$b){
//     return $a+$b;
// }
// echo fn(3,4);//7
