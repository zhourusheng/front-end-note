const http = require('http')

const data = {
  name: 'node.js入门',
  description: '返回信息描述内容',
  date: new Date()
}

http.createServer((req, res) => {
  // 设定了返回请求的文本类型为application/json
  // 格式 utf-8，否则会乱码
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  const result = JSON.stringify(data)
  res.end(result)
}).listen(8001, () => {
  console.log('listen at 8001')
})