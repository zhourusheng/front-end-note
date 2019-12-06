const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

// emit 触发一个监听函数
// on 注册一个监听函数

emitter.on('getUp', time => {
  console.log(`起床时间是${time}`)
})

emitter.emit('getUp', '8:00')