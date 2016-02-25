var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/reverse', function(req, res){
  s = req.query.s
  console.log(s)
  res.json(s.split("").reverse().join(""))
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});