var express = require('express');
var app = express();
var router_1 = require('./router/router_1');


app.get('/', function (req, res, next) {
  console.log('hi');
  next();
}, function (req, res) {
  res.send('Hello ');
});

app.use('/aboutrouter',router_1);

app.listen(3000, () => {
  console.log('listen t0 3000')
})