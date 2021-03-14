<?php
    header('content-type:text/html;charset=utf-8');

    $mysql_conf = array(
        'host'=>'localhost:3306', // 地址 端口号 mysql默认运行在3306
        'db_user'=>'root', // 登陆数据库的用户名
        'db_pass'=>'root', // 登陆数据库的密码
        'db'=>'h5_2009'   // 数据库名称
    );

    // 连接数据库(登陆)
    $mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);

    // 判断有没有连接成功
    // var_dump($mysqli);
    if($mysqli->connect_errno){
        // 如果有错误 终止代码执行  die()用于终止代码执行
        die('连接错误'.$mysqli->connect_errno);
    }

    // 设置查询字符串
    $mysqli->query('set names utf8');

    // 选择数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);

    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }

    // ----------------------------------------------------

    $sql = "select * from users"; //sql语句

    // 执行sql语句 $mysqli->query()
    // 执行查询操作时 返回值是一个结果集对象
    $result = $mysqli->query($sql);

    // var_dump($result);

    // 通过结果集获得一条数据
    // $row = $result->fetch_assoc();
    // var_dump($row);
    // $row = $result->fetch_assoc();
    // var_dump($row);
    // $row = $result->fetch_assoc();
    // var_dump($row);
    // $row = $result->fetch_assoc();
    // var_dump($row);

    $arr = array();

    while($row = $result->fetch_assoc()){
        array_push($arr,$row);
    }

    // var_dump($arr);
    $json = json_encode($arr);

    echo $json;

?>