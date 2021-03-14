<?php
// 生成前端需要的接口(简单的接口，复杂的接口)
// 接口就是页面的返回值，前端需要有一定的格式
// 1.简单的接口 - 二维数据。
$news1 = array(
    array('title'=>'111111111111111','date'=>'2020-9-14'),
    array('title'=>'222222222222222','date'=>'2020-9-14'),
    array('title'=>'333333333333333','date'=>'2020-9-14'),
    array('title'=>'444444444444444','date'=>'2020-9-14'),
    array('title'=>'555555555555555','date'=>'2020-9-14')
);

$news2 = array(
    array('title'=>'aaaaaaaaaaaaaaaa','date'=>'2020-9-14'),
    array('title'=>'bbbbbbbbbbbbbb','date'=>'2020-9-14'),
    array('title'=>'cccccccccccccccccc','date'=>'2020-9-14'),
    array('title'=>'dddddddddddddd','date'=>'2020-9-14'),
    array('title'=>'eeeeeeeeeeeeeeee','date'=>'2020-9-14')
);

$news3 = array(
    array('title'=>'阿古斯迪欧桂经理发计划的空间规划法规','date'=>'2020-9-14'),
    array('title'=>'阿斯蒂芬阿斯蒂芬阿斯蒂芬','date'=>'2020-9-14'),
    array('title'=>'地方个梵蒂冈','date'=>'2020-9-14'),
    array('title'=>'投入研发股份的回复高鸿股份','date'=>'2020-9-14'),
    array('title'=>'地方个人头热也有特约特意','date'=>'2020-9-14')
);
// json_encode()：将括号里面的值转换成json格式
// echo json_encode($news1);
// echo json_encode($news2);
// echo json_encode($news3);//中文变成Unicode编码

//2.复杂接口 - 对象
//上面的简单接口进行合并。

class data{

}

$n1 = new data();//实例化,  $n1:实例对象   data:类

//将上面的数组值，赋值给对象的属性(成员)
//data1,data2,data3都是属性名，数组属性的值。
$n1->data1 = $news1;
$n1->data2 = $news2;
$n1->data3 = $news3;

// echo json_encode($n1);

echo sha1('a');


