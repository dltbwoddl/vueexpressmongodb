var express = require('express')
var http = require('http');
const { Socket } = require('socket.io');

var app = express();
var server = http.Server(app);
server.listen(8080);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/namespace.html')
})
//기본 네임스페이스
var io = require('socket.io')(server);

//네임스페이스
var namespace = io.of('/balmostory');
namespace.on('connection', (Socket) => {
    console.log('success')
    namespace.emit('message', 'hello')
})

var namespace_2 = io.of('/balmostory_2');
namespace_2.on('connection', (Socket) => {
    console.log('success_2')
    namespace_2.emit('message','hello_2')
})