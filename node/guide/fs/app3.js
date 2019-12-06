const fs = require('fs')

const body = '### 测试文件text3的内容'

fs.writeFileSync('./test3.md', body)