// 使用接口（interface）来描述一个拥有 firstName 和 lastName 字段的对象
interface Person {
  firstName: string
  lastName: string
}

function greeter (person: Person) {
  return `hello, ${person.firstName} ${person.lastName}`
}

const user = {
  firstName: 'zhou',
  lastName: 'rusheng'
}

console.log(greeter(user))