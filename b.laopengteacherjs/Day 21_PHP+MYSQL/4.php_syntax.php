<?php

//设置字符编码。
header('content-type:text/html;charset=utf-8');
 
//php的所有的报错信息直接输出到浏览器上。

// 1.定义变量和常量
// 1.1.变量
// php的变量和js一样，都是松散类型(声明变量的时候无需告知类型)，$name = value
// $num = 100;
// $num++;
// echo $num;
// echo "<hr>";

// 1.2.常量：值不能改变  - define(常量名,常量值)声明
//                        /dɪˈfaɪn/定义
// 人为约定：常量的名称一般都是大写的。
// define('USERNAME','zhangsan');
// echo USERNAME;


// 2.php的输出
// 2.1.echo():函数，括号可以省略，将括号里面的信息输出到浏览器上面，解析html标签。
//  /ˈekoʊ/ 反射 
// $arr1 = Array('zhangsan','lisi','wangwu');//定义一个数组
// $arr2 = array(1,2,3,4,5);//定义一个数组

// 2.2.print_r():函数，输出变量的易于理解的信息。
//  /prɪnt/打印
// echo $arr1; //Array
// echo $arr1[0]; //zhangsan
// echo "<hr>";
// print_r($arr1);//Array ( [0] => zhangsan [1] => lisi [2] => wangwu )


// 3.php的数据类型 - 8中 - gettype()检测数据类型
// 数字类型：整数类型 integer   小数类型(浮点数)double
//                   /ˈɪntɪdʒər/整数
// $num = 1;
// $pi = 3.14;
// echo gettype($num);//integer
// echo gettype($pi);//double

// 字符串类型：string
// php字符串的连接(拼接)：通过点操作符完成
// php双引号可以解析变量，但是最好添加一个大括号{}将变量放进去。
// $str = 'hello';
// $str1 = 'world';
// echo $str.$str1;
// echo gettype($str);


// $name = 'zhangsan';
// $age = 100;
// echo "我的名字是：{$name},我今年{$age}岁";


// 布尔类型：boolean
// $n1 = true;
// $n2 = false;

// echo $n1;//1
// echo $n2;//空隙


// 数组类型：array
// 数组的第一种写法：默认数字索引。
// $arr1 = Array('zhangsan','lisi','wangwu');
// 数组的第二种写法：字符串的索引。
// $arr2 = Array('name'=>'zhangsan','age'=>100,'sex'=>'男');
// echo gettype($arr2);//array


// 对象类型：object
// 对象来自于类下面。
// class person{

// }
// $p1 = new person();
// echo gettype($p1);//object


// NULL类型：表示js里面的undefined
// $hehe;
// echo gettype($hehe);//NULL

// $name =NULL;
// echo gettype($name);//NULL

// resource：资源类型，固有的情况会产生资源类型(数据库连接，读写系统文件，图片对象)
///ˈriːsɔːrs,rɪˈsɔːrs/资源
// $fp = fopen('php.txt','r'); //打开一个文件，以可读的形式r 
// $fr = fread($fp,30);//读取文件里面的内容。
// echo gettype($fp); //resource
// echo "<hr>";
// echo $fr; 










