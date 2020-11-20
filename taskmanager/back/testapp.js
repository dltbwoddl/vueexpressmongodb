const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
var cors = require('cors')
app.use(cors())

console.log(1)
app.get('/', (req, res) => {
    fs.readFile("data/data.json","utf8",function(err,data){
        if(err) throw err;
        console.log(typeof(data))
        console.log(JSON.parse(data))
        console.log(3)
        res.send(JSON.parse(data).name)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})