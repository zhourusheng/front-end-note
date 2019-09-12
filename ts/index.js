function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'zhou',
    lastName: 'rusheng'
};
console.log(greeter(user));
