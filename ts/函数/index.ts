/**
 *  必要参数，默认参数和可选参数：它们都表示某一个是参数
 *  有时，你想同时操作多个参数，或者并不知道会有多少参数传进来
 *  在JS中，可以使用 agruments 来访问所有传进来的参数
*/
// rest 是能用数组接收
function buildName(firstName: string, ...restName: string[]): string {
  return firstName + ' ' + restName.join('')
}
let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')