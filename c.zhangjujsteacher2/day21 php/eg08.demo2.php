<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
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
    
    ?>

    <ul>
        <?php
            for($i = 0;$i < count($data);$i++){
                echo '<li>'.$data[$i]['bookName'].'  价格:'.$data[$i]['price'].'</li>';
            }
        ?>
    </ul>
</body>
</html>