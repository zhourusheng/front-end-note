# 为什么不可以直接操作 this.state


首先，直接修改 state 组件是不会重新渲染的

```js
// wrong
this.state.comment = 'Hello';
```

