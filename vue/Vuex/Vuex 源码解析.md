# Vuex 源码解析

## 框架核心流程

## 目录结构

## 源码分析

### 从入口开始

Vuex 源码入口文件是 `src/index.js`

```js
export default {
  Store,
  install,
  version: '__VERSION__',
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers
}
```

`Store` 是 Vuex 提供的状态存储类，通常我们使用的 Vuex 就是通过创建 Store 的实例

`install` 方式是每个 Vue 插件必须的

> 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方 法。install 方法调用时，会将 Vue 作为参数传入。

```js
function install(_Vue) {
  // Vue 已经存在并且相等，说明已经 Vuex.use 过
  if (Vue && _Vue === Vue) {
    // 非生产环境报错，vuex 已经安装，代码继续执行
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      )
    }
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}
```

## 参考

- [从头开始学习 Vuex](https://github.com/ljianshu/Blog/issues/36)
- [Vuex 官方文档](https://vuex.vuejs.org/zh/guide/state.html)
- [Vuex 框架原理与源码分析](https://tech.meituan.com/2017/04/27/vuex-code-analysis.html)
- [Vuex 2.0 源码分析](https://zhuanlan.zhihu.com/p/23921964)
- [学习 vuex 源码整体架构](https://github.com/lxchuan12/vuex-analysis)
