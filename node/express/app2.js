var express = require('express')
var utility = require('utility')

var app = express()

app.get('/', function(req, res) {
  // 从req.query 中取出参数 q
  // 如果需要取出body中的信息，则需要 body-parser 中间件
  var q = req.query.q

  // 调用utility.md5
  if (q) {
    var md5Value = utility.md5(q)
    res.send(md5Value)
  } else {
    res.send('未获取req.query.q')
  }
})

app.listen(3001, function(req, res) {
  console.log('app is running at port 3000');
})