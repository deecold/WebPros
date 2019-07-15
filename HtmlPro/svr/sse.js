var express = require('express');
var app = new express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.get('/timer', function (req, resp) {

    resp.header('Content-Type', "text/event-stream");
    var hander = setInterval(() => {
        var now = new Date();
        resp.write("data:" + now + "\n\n");
    }, 1000);

    var hander2 = setInterval(() => {
        resp.write("event:foo\n");
        resp.write("data: a foo event\n\n");
    }, 3000);

    req.connection.addListener('close', function () {
        console.log('监听停止事件');
        clearInterval(hander);
        clearInterval(hander2);
    });


});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('SSE服务器启动-%s:%s', host, port);
});