// https://github.com/mqyqingfeng/Blog/issues/84

//  1. 字符串模板 反撇号 `` 中使用反斜杠 \ 可以转义 `

let message = `hello \` world`
console.log(message)

// 2. 模板字符串中，空格、缩进、换行都会被保留，可以用 trim() 消除首行换行

let message2 = `
  <ul>
    <li>1</li>
    <li>1</li>
  </ul>
`.trim()
console.log(message2)

// 3. ${} 内可以嵌入 任意变量 或者 js 表达式

// 4. 字符串模板支持嵌套

let arr = [{ value: 1 }, { value: 2 }]
let message4 = `
  <ul>
    ${arr
      .map(item => {
        return `<li>${item.value}</li>`
      })
      .join('')}
  </ul>
`
console.log(message4)

// 5. 标签模板：模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个字符串

let x = 'hello'
let y = 'Kevin'
var res = messageFunc`${x}, I am ${y}`
console.log(res)

// 定义 messageFunc 函数来处理 字符串模板
// literals 文字
// 注意在这个例子中 literals 的第一个元素和最后一个元素都是空字符串
function messageFunc(literals, val1, val2) {
  console.log('literals', literals)
  console.log('value1', val1)
  console.log('value2', val2)
}
