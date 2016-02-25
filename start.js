var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/reverse', function(req, res){
  s1 = req.query.s1
  console.log(s1)
  s2 = req.query.s2
  console.log(s1)
  ret = {
    r1: s1.split("").reverse().join(""),
    r2: s2+s2
  }
  res.json(ret)
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});