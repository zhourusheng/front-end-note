var color = ['red', 'blue', 'green']

// ES5：for循环数组遍历
for(var i = 0; i < color.length; i++) {
  console.log(color[i])
}

// forEach: 数组遍历
// callback()接收三个参数
color.forEach((item, index, array) => {
  console.log(item, index, array)
})
