<?php
//设置字符编码。
header('content-type:text/html;charset=utf-8');

//1.超级全局变量,通过表单的name获取对应的表单里面的值
//submit配合跳转。否则无效
// $_POST[]：前端post方式提交数据
// $_GET[]：前端get方式提交数据或者直接地址栏提交。

// $user = $_POST['username'];//前端用户名的表单name值。
// $pass = $_POST['password'];//前端用户名的表单name值。
// $email = $_POST['email'];//前端用户名的表单name值。

// $user = $_GET['username'];//前端用户名的表单name值。
// $pass = $_GET['password'];//前端用户名的表单name值。
// $email = $_GET['email'];//前端用户名的表单name值。
// $hehe = $_GET['hehe'];//地址栏。

// echo $user; 
// echo $pass;
// echo $email;
// echo $hehe;

//2.php连接数据库。
// new mysqli(主机名，数据库用户名，数据库密码，数据库名称)

define('HOST','localhost');//主机名
define('USERNAME','root');//数据库用户名
define('PASSWORD','');//数据库密码
define('DBNAME','data2008');//数据库名称

$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);//$conn:数据库连接对象
//连接器 /kɑːn/ 
//@:容错处理，错误信息不显示。
//自定义的错误处理
if($conn->connect_error){//满足条件，数据库连接有误。
    die('数据库连接错误'.$conn->connect_error);//退出，并输出括号里面的信息
}

//设置字符编码问题。
// $conn->query():执行括号里面的代码，可以执行sql语句。
$conn->query('SET NAMES UTF8');

// $user = $_POST['username'];//前端用户名的表单name值。zhangsan
// $pass = $_POST['password'];//前端用户名的表单name值。
// $email = $_POST['email'];//前端用户名的表单name值。

// INSERT INTO 表名 VALUES (对应的值); 
//NOW():获取当前时间。
// $conn->query(" insert registry  values (default,'$user','$pass','$email',NOW())"); //给数据库里面的registry添加数据。

//注意：sql语句不显示错误信息，通过navicat进行调试
//通过命令行调试sql语句的错误。
//navicat - 工具 - 命令行界面 可以执行sql语句。
//use 数据库名称  --->使用哪个数据库。
//将对应的sql语句写入检测。

// $conn->query("insert guestlove values(default,'https://img.alicdn.com/bao/uploaded/i3/2055550425/TB28vMzjPnD8KJjSspbXXbbEXXa_!!2055550425.jpg_200x200q90.jpg_.webp','花间树里|彩云| ins北欧风金边陶瓷甜品盘平盘子菜盘西餐牛排盘子','100.25','25'),(default,'https://img.alicdn.com/bao/uploaded/i2/753580051/O1CN01lQuQNJ1CFOmGEYbg5_!!0-saturn_solar.jpg_200x200q90.jpg_.webp','冰种阳绿翡翠戒指女蛋面裸石戒面18K金镶嵌','56.89',20)");


//中文乱码的解决方式
//wampserver - mysql - my.ini
// 文件的最后添加四行代码。
// [mysqld]
// character-set-server=utf8
// [client]
// default-character-set=utf8



//获取数据库的数据。
// select * from users where 条件;
///sɪˈlekt/ 选择 
$result=$conn->query("select * from guestlove");//获取guestlove里面的所有数据，给$result
// echo $result->num_rows;//4 记录的条数
//  print_r($result->fetch_assoc());//获取查询到的数据，逐条获取。返回值是数组
//            /fetʃ/取来；接来     文件名扩展关联
//  print_r($result->fetch_assoc());//获取查询到的数据，逐条获取。
//  print_r($result->fetch_assoc());//获取查询到的数据，逐条获取。
//  print_r($result->fetch_assoc());//获取查询到的数据，逐条获取。
//  print_r($result->fetch_assoc());//获取查询到的数据，逐条获取。
//  print_r($result->fetch_assoc());//获取查询到的数据，逐条获取。

$arr = array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();//当前的数组赋值给另一个数组，形成二维数组。
}

echo json_encode($arr);//真正的接口。






