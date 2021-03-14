<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background:orange;
            color:blue;
        }
    </style>
</head>
<body>
    <?php
        echo 'hello,php'; //输出hello,php  和js里面的document.write()一样的
    ?>
</body>
<script>
    console.log('hello,js')
</script>
</html>

<!-- 重点：前后端分离，不要在php文件放入html,css,js等代码 -->
