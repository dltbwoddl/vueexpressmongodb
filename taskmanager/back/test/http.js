var http = require('http')
var server = http.createServer((req,res)=>{
    res.end('socket.io Sample')
})
server.listen(3000)