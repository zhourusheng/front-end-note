# 为什么在 React 类实例中可以访问 this.setState
 
在 react class Component 类组件中的, 子组件通过 `extends` 继承而来，子组件调用 `setState()` 时通过原型链 `__proto__` 查找到原型上的 setState() 方法。

## 参考
https://github.com/frontend9/fe9-interview/issues/11
