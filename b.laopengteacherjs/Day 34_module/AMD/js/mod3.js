define(['mod2'], function(m2) {
    return {
        showcolor: ! function() {
            const box = document.querySelector('.box');
            box.onclick = function() {
                this.style.backgroundColor = `rgb(${m2.rannum(0,255)},${m2.rannum(0,255)},${m2.rannum(0,255)})`;
            }
        }()
    }
});