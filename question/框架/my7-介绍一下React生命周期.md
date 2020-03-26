# react 生命周期

React 16 之后被废弃的生命周期

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate


目前 react 16 生命周期分为三个阶段：挂载、更新、卸载

## 挂载阶段

* `constructor` 类的构造函数, 最先被执行
* `getDerivedStateFromProps`  `static getDerivedStateFromProps(nextProps, prevState)` 静态方法
* `render` render 函数应该是纯函数，只返回需要的内容，不应包含其他业务逻辑
* `componentDidMount` 组件被装载之后调用，可以拿到 DOM 节点并操作 


## 更新阶段

共三种方法可以触发组件render():

new props (props 发生改变)、setState、forceUpdate()

* `getDerivedStateFromProps`
* `shouldComponentUpdate`
* `render`
* `getSnapshotBeforeUpdate`
* `componentDidUpdate`

## 卸载阶段

* `componentWillUnmount`


## 参考
https://juejin.im/post/5d5f44dae51d4561df7805b4#heading-5
生命周期图：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/