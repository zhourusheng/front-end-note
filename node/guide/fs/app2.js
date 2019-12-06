const fs = require('fs')

// 异步回调读取文件
console.log('异步开始')

fs.readFile('./test.md', 'utf8', (err, data) => {
  console.log('test.md的内容')
  console.log(data)
})

console.log('异步进行中')

fs.readFile('./test2.md', 'utf8', (err, data) => {
  console.log('test2.md的内容')
  console.log(data)
})

console.log('异步结束')