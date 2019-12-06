const fs = require('fs')

// node 天生就是异步的
// 异步写入文件 writeFile

const body = '### 测试文件test4的内容'
fs.writeFile('./test4.md', body, (err) => {
  if (err) {
    throw err
  }
  console.log('文件test4已被保存')
})

const body2 = '### 测试文件test5的内容'
fs.writeFile('./test5.md', body2, (err) => {
  if (err) {
    throw err
  }
  console.log('文件test5已被保存')
})
