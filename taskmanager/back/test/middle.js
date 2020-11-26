var express = require('express');
var app = express();

var cors = require('cors')
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', function (req, res) {
    console.log(req.body)
});

app.listen(3000);