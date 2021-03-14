### web存储技术

### 运行环境
cookie           服务器环境
localStorage     可以离线使用 也可以 在线使用
sessionStorage   服务器环境


### 共同点
用于数据的存储
存储在本地浏览器中
不能跨浏览器使用
在多个页面中进行数据的共享和传输(相同的地址)
存储的数据都是键值对
存储的值 都是 字符串
如果需要存储对象(JSON.stringify)

### 不同点
cookie 每个cookie大小为4kb
一个网站最多可以使用 50个cookie
ie6 只能使用20个cookie
cookie没有相关的操作方法 需要自行封装

Storage 有统一的操作接口（API）

localStorage
存储大小 5MB
1MB = 1024kb
数据长期有效 使用程序清除数据或用户存储缓存才会失效

sessionStorage
存储大小 5MB
会话存储 一次会话结束后自动销毁

### 兼容问题
Storage 是来自HTML5标准
所有需要支持低版本IE开发的项目 只能使用 cookie
所有的移动端项目 都可以使用 Storage