function Parent(age) {
  this.age = age
}

var p = new Parent(50)
p.constructor === Parent
p.constructor === Object
