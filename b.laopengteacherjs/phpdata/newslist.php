<?php

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


class data{

}

$n1 = new data();


$n1->data1 = $news1;
$n1->data2 = $news2;
$n1->data3 = $news3;

echo json_encode($n1);




