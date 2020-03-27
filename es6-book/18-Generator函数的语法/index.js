function * helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
  // 函数内部有三个状态
}

var hw = helloWorldGenerator()