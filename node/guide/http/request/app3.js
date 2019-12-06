const http = require('http')

let reqData = ''

const option = {
  host: '127.0.0.1',
  port: '8001'
}

const req = http.request(option)

req.on('response', res => {
  res.on('data', chunk => {
    reqData += chunk
  })
  res.on('end', () => {
    console.log(reqData)
  })
}).end()