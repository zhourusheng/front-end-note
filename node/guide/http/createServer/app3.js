const http = require('http')
const url = require('url')
const qs = require('querystring')

// 生成接口返回值
const getResponse = userId => ({
  success: true,
  data: {
    userId,
    name: 'node.js入门',
    description: '返回信息描述内容',
    date: new Date()
  }
})

// http
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  const reqUrl = url.parse(req.url)
  // 判断接口路径
  if (reqUrl.pathname === '/api/search/data') {
    // 获取userId 参数
    const uid = qs.parse(reqUrl.query).userId
    // 生成返回值
    const result = JSON.stringify(getResponse(uid))
    res.end(result)
  } else {
    res.writeHead(404)
    res.end('NotFound')
  }
}).listen(8001, () => {
  console.log('listen at 8001')
})