<?php
//设置字符编码。
header('content-type:text/html;charset=utf-8');
$taobao = file_get_contents('https://api.apiopen.top/videoRecommend?id=127398');
echo $taobao;