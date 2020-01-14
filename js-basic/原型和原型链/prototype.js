function doSomething() {}
// 添加属性到prototype原型上
doSomething.prototype.foo = 'bar'
// 使用 new 运算符在现在这个原型基础之上，创建一个 doSomeThing 的实例
var doSomeInstancing = new doSomething()
doSomeInstancing.prop = 'some value'
console.log(doSomething.prototype)
console.log(doSomeInstancing)

var doSomething = function() {}
console.log(doSomething.prototype)

// 构造函数
function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  }
  this.age = age
  this.gender = gender
  this.interests = interests
  this.bio = function() {
    var string =
      this.name.first +
      ' ' +
      this.name.last +
      ' is ' +
      this.age +
      ' years old. '
    var pronoun
    if (
      this.gender === 'male' ||
      this.gender === 'Male' ||
      this.gender === 'm' ||
      this.gender === 'M'
    ) {
      pronoun = 'He likes '
    } else if (
      this.gender === 'female' ||
      this.gender === 'Female' ||
      this.gender === 'f' ||
      this.gender === 'F'
    ) {
      pronoun = 'She likes '
    } else {
      pronoun = 'They like '
    }
    string += pronoun
    if (this.interests.length === 1) {
      string += this.interests[0] + '.'
    } else if (this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.'
    } else {
      for (var i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.'
        } else {
          string += this.interests[i] + ', '
        }
      }
    }
    alert(string)
  }
  this.greeting = function() {
    alert("Hi! I'm " + this.name.first + '.')
  }
}

var person1 = new Person('zhou', 'Smith', 32, 'male', ['music', 'skiing'])
