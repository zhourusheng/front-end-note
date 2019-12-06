// url模块是一个分析、解析url的模块
// 主要提供以下三种方法：

// url.parse  解析一个url地址, 返回一个url对象
// url.formate 接收一个url对象为参数, 返回一个完整url
// url.resolve 


const url =  require('url')

const parseUrl = 'http://localhost:3000/floorheat_operate/screenManage/3/?q=node.js'

const urlObj = url.parse(parseUrl)

console.log(urlObj)