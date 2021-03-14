<?php
$fnname = isset($_GET['callback'])?$_GET['callback']:'fn';
$weather = file_get_contents('http://api.k780.com/?app=weather.realtime&weaid=1&ag=today,futureDay,lifeIndex,futureHour&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4');

echo $fnname.'('.$weather.')';