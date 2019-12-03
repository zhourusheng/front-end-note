var http = require('http')

http.createServer(function(request, response) {
  var body = []

  console.log(request.method)
  console.log(request.headers)

  request.on('data', function(chunk) {
    body.push(chunk)
  })

  request.on('end', function() {
    body = Buffer.concat(body)
    console.log(body.toString())
  })

  response.writeHead(200, {
    'Content-Type': 'text-plain'
  })
  response.end('Hello World')
}).listen(8081)