class Scale {
    constructor() { //构造函数
        //1.获取元素
        this.scale = document.querySelector('.scale');
        this.spic = document.querySelector('.spic');
        this.sf = document.querySelector('.sf');
        this.bf = document.querySelector('.bf');
        this.bpic = document.querySelector('.bpic');
    }
    init() {
        //1.鼠标移入小图，小放和大放显示，否则隐藏
        this.scale.onmouseover = () => {
            this.sf.style.visibility = 'visible';
            this.bf.style.visibility = 'visible';
            this.spic.onmousemove = (ev) => {
                var ev = ev || window.event;
                let left = ev.clientX - this.scale.offsetLeft - this.sf.offsetWidth / 2;
                let top = ev.clientY - this.scale.offsetTop - this.sf.offsetHeight / 2;
                if (left <= 0) {
                    left = 0;
                } else if (left >= this.spic.offsetWidth - this.sf.offsetWidth) {
                    left = this.spic.offsetWidth - this.sf.offsetWidth;
                }

                if (top <= 0) {
                    top = 0;
                } else if (top >= this.spic.offsetHeight - this.sf.offsetHeight) {
                    top = this.spic.offsetHeight - this.sf.offsetHeight;
                }

                //求比例
                this.bili = this.bpic.offsetWidth / this.spic.offsetWidth;


                this.sf.style.left = left + 'px'; //减去scale盒子的位置。
                this.sf.style.top = top + 'px';

                this.bpic.style.left = -this.bili * left + 'px';
                this.bpic.style.top = -this.bili * top + 'px';
            }
        };

        this.scale.onmouseout = () => {
            this.sf.style.visibility = 'hidden';
            this.bf.style.visibility = 'hidden';
        };
        //2.求小放的尺寸。
        this.sf.style.width = this.spic.offsetWidth * this.bf.offsetWidth / this.bpic.offsetWidth + 'px';
        this.sf.style.height = this.spic.offsetHeight * this.bf.offsetHeight / this.bpic.offsetHeight + 'px';

    }
}

export {
    Scale
}