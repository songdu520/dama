function fib(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

// 在外部文件中是 没有 DOM 和 BOM的

onmessage = function(ev) {
    let result = fib(ev.data);
    postMessage(result);
}