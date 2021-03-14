// 引入ws模块
const WebSocket = require('ws');
 
// 创建一个websocket服务，并且监听在8080端口
// wss是服务的实例
const wss = new WebSocket.Server({ port: 8080 });
 
// 监听连接
wss.on('connection', function connection(ws) {
  // 监听了这个用户发送了内容
  ws.on('message', function incoming(message) {
    // console.log('received: %s', message);
    // ws.send(message);

    // wss.clients表示所有的用户
    // wss.clients.forEach(function each(client) {
    //   // 判断当前用户是否还保持连接
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(message);
    //   }
    // });

    if (message.includes('!@$%%^^')) {
      // 发送过来的是名字
      ws.username = message.slice(7);
      wss.clients.forEach(function each(client) {
        // 判断当前用户是否还保持连接
        if (client.readyState === WebSocket.OPEN) {
          client.send(ws.username + '进入了直播间');
        }
      });
    } else {
      wss.clients.forEach(function each(client) {
        // 判断当前用户是否还保持连接
        if (client.readyState === WebSocket.OPEN) {
          client.send(ws.username + '说：' + message);
        }
      });
    }
  });
 
  // 发送给前端
  // ws.send('something');
});