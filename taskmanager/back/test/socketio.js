var express = require('express')
var http = require('http');
const { Socket } = require('socket.io');

var app=express();
var server = http.Server(app);
server.listen(8080);

var io = require('socket.io')(server);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/socketio.html')
})

io.on('connection',(Socket)=>{
    console.log("클라이언트 접속")
})