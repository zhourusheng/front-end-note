const http = require('http')

http.createServer((req, res) => {
  res.end('hello world')
}).listen(8001, () => {
  console.log('listen at 8001')
})