<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $msg = "你好世界!";
        $color = 'red';
    ?>
    <h1 style="color:<?php echo $color;?>"><?php echo $msg;?></h1>
</body>
</html>