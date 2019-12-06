const http = require('http')

let reqData = ''

// 使用http.get(option) 可以省略 method: 'get'

http.get({
  host: '127.0.0.1',
  port: '8001'
}, res => {
  res.on('data', chunk => {
    reqData += chunk
  })
  res.on('end', () => {
    console.log(reqData)
  })
}).end()