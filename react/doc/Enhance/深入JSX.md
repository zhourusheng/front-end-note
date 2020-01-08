# 深入JSX

实际上JSX仅仅只是 `React.createElement(component, props, ...children)` 的语法糖

## 1. 指定 React 元素类型

JSX 标签的第一部分指定了 React 元素的类型

大写字母开头的 JSX 标签意味着他们是 React 组件。这些标签会被编译为对命名变量的直接引用，所以，当你使用 JSX <Foo /> 表达式时，Foo 必须包含在作用域内。

### 1.1 React 必须在作用域内

由于 JSX 会编译为 React.createElement 调用形式，所以 React 库也必须包含在 JSX 代码作用域内。

### 1.2 在 JSX 类型中使用点语法

在 JSX 中，你也可以使用点语法来引用一个 React 组件。当你在一个模块中导出许多 React 组件时，这会非常方便。例如，如果 `MyComponents.DatePicker` 是一个组件，你可以在 JSX 中直接使用：

```js
import React from 'react'

const MyComponents = {
  DatePicker: function(props) {
    return <div>Imagine a {props.color} datepicker here.</div>
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />
}
```

### 1.3 用户定义的组件必须以大写字母开头

以小写字母开头的元素代表一个HTML内置组件， 比如 `<div>` 或者 `<span>`会生成相应的字符串 `'div'` 或者 `'span'` 传递给 `React.createElement`（作为参数）。大写字母开头的元素则对应着JS 引入或者自定义的组件，如`<Foo />` 会编译成 `React.createElement(Foo)`


### 1.4 在运行时选择类型


## 2. JSX 中的 Props

有多种方式可以在 JSX 中指定 props。

### 2.1 JavsScript 表达式作为 props

你可以把包裹在 {} 中的 JavaScript 表达式作为一个 prop 传递给 JSX 元素。例如，如下的 JSX：

```js
<MyComponent foo={1 + 2 + 3 + 4} />
```

if 语句以及 for 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但是，你可以用在 JSX 以外的代码中。比如：



### 2.2 字符串字面量

你可以将字符串字面量赋值给 props,如下两个 JSX 是等价的

```js
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
```

### 2.3 Props 默认值为 "true"

如果你没给 prop 赋值，它的默认值是 true。以下两个 JSX 表达式是等价的：

```js
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

### 2.4 属性展开

如果你已经有了一个 props 对象，你可以使用展开运算符 ... 来在 JSX 中传递整个 props 对象。以下两个组件是等价的

```js
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

## 3. JSX中的子元素

包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性 `props.children` 传递给外层组件。有几种不同的方法来传递子元素：

### 3.1 字符串字面量

你可以将字符串放在开始和结束标签之间，此时 props.children 就只是该字符串。这对于很多内置的 HTML 元素很有用。例如：

```js
<MyComponent> hello world!</MyComponent>
```

这是一个合法的 JSX, `MyComponent` 中的 `props.children` 是一个简单的未转义字符串 `"Hello world!"`。因此你可以采用编写写 HTML 的方式来编写写 JSX。如下所示：


### 3.2 JSX 子元素

子元素允许多个 JSX 元素组成。这对于嵌套组件非常有用：

```js
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>
```


### 3.3 JS 表达式作为子元素

JavaScript 表达式可以被包裹在 `{}` 中作为子元素。例如，以下表达式是等价的：

```js
<MyComponent>foo</MyComponent>

<MyComponent>{'foo'}</MyComponent>
```

### 3.4 函数作为子元素



### 3.5 boolean、 Null、Undefined 将会忽略