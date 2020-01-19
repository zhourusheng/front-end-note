var obj = new Object()
console.log(1 + obj)  // "1[object Object]"

var obj2 = new Object()
obj2.valueOf = function() {
  return 2
}
console.log(1 + obj2) // 3