<?php
    header('content-type:text/html;charset=utf-8');

    // 函数的命名 驼峰命名法  没有$
    // function fn(){
    //     echo '<h1>你好世界</h1>';
    // }

    // fn();


    function fn2($num){
        for($i=2;$i<$Num;$i++){
            if($num%$i==0){
                return false;
            }
        }
        return true;
    }

    if(fn2(7)){
        echo '是质数';
    }else{
        echo '不是质数';
    }
?>