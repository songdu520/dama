function getStyle(obj, attr) { //obj:运动的物体   attr:运动物体的属性
    if (window.getComputedStyle) { //标准
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

function bufferMove(obj, json, fn) { //obj:运动的物体   json：属性对象   fn:函数(函数做参数，回调函数)
    let speed = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        let flag = true;
        //遍历属性attr，属性值
        for (let attr in json) { //attr:属性名   json[attr]:目标值
            //求当前值(透明度有问题)
            let currentvalue = null;
            if (attr === 'opacity') { //透明度
                currentvalue = getStyle(obj, attr) * 100; //将透明度的值扩大100倍。
            } else {
                currentvalue = parseInt(getStyle(obj, attr));
            }
            //求缓冲的速度
            speed = (json[attr] - currentvalue) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            //物体的运动和停止
            if (currentvalue !== json[attr]) { //当前的某个属性没有到目标点，继续运动
                //透明度有问题,透明度没有单位
                if (attr === 'opacity') {
                    obj.style.opacity = (currentvalue + speed) / 100; //缩小100倍，0-1之间的值进行赋值
                } else {
                    obj.style[attr] = currentvalue + speed + 'px';
                }
                //只有物体还在运动
                flag = false;
            }
        }

        if (flag) { //flag ===true for没有改变flag的值,运动的结束了。
            clearInterval(obj.timer);
            fn && typeof fn === 'function' && fn(); //上一次运动停止了 如果fn存在，fn是一个函数，执行fn，否则不执行。
        }


    }, 10)
}