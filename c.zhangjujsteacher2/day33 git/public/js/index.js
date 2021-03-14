var xhr = new XMLHttpRequest();
xhr.open('get', '/users');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.responseText);
    }
}