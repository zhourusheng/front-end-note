# React 顶层 API

## 概览

### 组件

使用 React 组件可以将 UI 拆分为独立且复用的代码片段，每部分都可独立维护。你可以通过子类 `React.Component` 或 `React.PureComponent` 来定义 React 组件。

* React.Component
* React.PureComponent

React 组件也可以被定义为可被包装的函数：

* React.memo

#### React.Component

`React.Component` 是使用 `ES6 classes` 方式定义 React 组件的基类：

```js
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


### 创建React元素

react官方建议使用JSX 语法编写UI组件。每个JSX元素都是调用 `React.createElement()` 的语法糖。一般来说，如果你使用了JSX，就不需要调用一下方法。

* createElement
* createFactory (废弃)

#### createElement

```js
React.createElement(
  type,
  [props],
  [...children]
)
```
创建并返回指定类型的新 React元素。



### 转换 React 元素

React 提供了几个用于操作元素的 API：

* cloneElement()
* isValidElement()
* React.Children()


### Fragments

React 还提供了用于减少不必要嵌套的组件。

* React.Fragment


### Refs

* React.createRef
* React.forwardRef



### Suspense

Suspense使得组件可以等待某些操作结束后，在进行渲染。目前 Suspense 支持的场景是：通过React.lazy 动态加载组件。

* React.lazy
* React.Suspense