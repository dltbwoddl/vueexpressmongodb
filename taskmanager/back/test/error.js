var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    console.log(1);
    throw new Error('hi error')
    res.send("hi")
});

app.use(function(err,req, res, next) {
    console.log(2)
    console.error(err);
    res.status(500).send('path error');
  });


app.listen(3000,(err,req,res)=>{
    console.log("success");
});