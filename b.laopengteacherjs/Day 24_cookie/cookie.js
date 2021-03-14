/*
function addcookie(name, value, days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date};path=/`;
}

function getcookie(name) {
    let arr = decodeURIComponent(document.cookie).split('; ');
    for (let value of arr) {
        let newarr = value.split('=');
        if (newarr[0] === name) {
            return newarr[1];
        }
    }
}

function delcookie(name) {
    addcookie(name, '', -1);
} 
*/

const cookie = {
    set: function(name, value, days) {
        let date = new Date();
        date.setDate(date.getDate() + days);
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${date};path=/`;
    },
    get: function(name) {
        let arr = decodeURIComponent(document.cookie).split('; ');
        for (let value of arr) {
            let newarr = value.split('=');
            if (newarr[0] === name) {
                return newarr[1];
            }
        }
    },
    remove: function(name) {
        cookie.set(name, '', -1);
    }

}