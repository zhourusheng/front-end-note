function buildName(firstName, lastName = 'Smith') {
  return firstName + ' ' + lastName
}

let res = buildName('zhou', 222)
console.log(res)