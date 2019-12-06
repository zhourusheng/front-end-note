const http = require('http')

const server = http.createServer((req, res) => {
  let data = ''

  req.on('data', chunk => {
    data += chunk
  })

  req.on('end', () => {
    const method = req.method
    const url = req.url
    const headers = JSON.stringify(req.headers)
    const httpVersion = req.httpVersion

    res.writeHead(200, {
      'Content-Type': 'text/html'
    })

    const dataHtml = `<p>data: ${data}</p>`
    const methodHtml = `<p>method: ${method}</p>`
    const headersHtml = `<p>headers: ${headers}</p>`
    const urlHtml = `<p>url: ${url}</p>`
    const httpVersionHtml = `<p>httpVersion: ${httpVersion}</p>`
    const resData = dataHtml + methodHtml + headersHtml + urlHtml + httpVersionHtml

    res.end(resData)
  })
})


server.listen(3002, () => {
  console.log('listen port 3002')
})