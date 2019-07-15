var express = require('express');
var expressWS = require('express-ws');
var app = new express();
expressWS(app);


app.ws('/info', function (ws, req) {
    ws.send('连接成功');
    ws.on('message', function (msg) {
        console.log('接收到信息:' + msg);
        ws.send("服务器的返回信息:" + msg);
    })

    ws.on('close', function (msg) {
        console.log('关闭Socket');
    })
});

var server = app.listen(8002, function () {
    console.log('启动服务器%s,%s', server.address().server, server.address().port);
});