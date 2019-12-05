
var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')

var app = express()

app.get('/', function(req, res, next) {
})

app.listen(3001, function() {
  console.log('app is running at 3001')
})