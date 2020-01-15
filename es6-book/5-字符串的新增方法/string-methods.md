# 字符串的新增方法

## 1. String.fromCodePoint()


## 2. String.raw()


## 3. 实例方法：codePointAt()


## 4. 实例方法：normalize()


## 5. 实例方法：includes(), startsWith(), endsWith()

传统上，JavaScript 只有 `indexOf` 方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

- **includes()**: 返回布尔值，表示是否找到了参数字符串。
- **startsWith()**: 返回布尔值，表示参数字符串是否在原始字符串的头部。
- **endsWith()**: 返回布尔值，表示参数字符串是否在原始字符串尾部。

```js

```

## 6. 实例方法：repeat()

`repeat` 方法返回一个新字符串，表示将原字符串重复n次。



## 7. 实例方法：padStart(), padEnd()

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。



## 8. 实例方法：trimStart(), trimEnd()


ES2019 对字符串实例新增了 `trimStart()` 和 `trimEnd()` 这两个方法。它们的行为与 `trim()` 一致，`trimStart()` 消除字符串头部的空格，`trimEnd()` 消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。

## 9. 实例方法：matchAll()

`matchAll()` 方法返回一个正则表达式在当前字符串的所有匹配，详见《正则的扩展》的一章