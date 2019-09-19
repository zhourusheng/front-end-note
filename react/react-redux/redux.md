### (一) redux
  1. Redux 是Javascript 状态容器，提供可预测的状态管理。


### (二) redux 核心概念
  #### 1. Store

  * 通过 `getState()` 方法获取state
  * 通过 `dispatch(action)` 方法更新state
  * 通过 `subscribe(listener)` 注册监听器
  * 通过 `subscribe(listener)` 返回的函数注销监听器

  再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store

  #### 2. action

  `action` 描述了一个更新 `state` 的动作， 它是一个对象，其中`type` 属性为必须的，它指定了某动作需要修改的值

  1. `{type: UPDATE_TITLE_COLOR, payload: 'green'}`

  #### 3. actionCreator

  如果每次派发动作时都写上长长的 `action` 对象不是很方便，而 `actionCreator` 就是创建 `action` 对象的一个方法，
  调用这个方法就能返回一个 `action` 对象，用于简化代码。

  #### 4. dispatch

  `dispatch` 是一个方法，它用于派发一个动作 `action`，这是唯一的一个能够修改 `state` 的方法，
  它内部会调用 `reducer` 来调用不同的逻辑基于旧的 `state` 来更新出一个新的 `state`。

  #### 5. reducer
  reducer是更新state的核心，它里面封装了更新state的逻辑，reducer由外界提供（封装业务逻辑，在createStore时传入），
  并传入旧state对象和action，将新值更新到旧的state对象上返回。


### (三) redux 三大原则
  1. 单一数据源
      整个应用的 `state` 被储存在一个 object tree 中，并且整个object tree只能存在唯一一个`store`中

  2. state 是只读的
      唯一改变 `state` 的方法就是触发(`dispatch`) `action`, `action` 是一个用于描述已发生事件的普通对象

  3. 使用纯函数来执行修改
      为了描述 `action` 如何改变 state tree, 需要写 `reducers`.
      reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state

  - 纯函数 （Pure Function）
    - 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数
      - 1. 函数的返回结果只依赖于它的参数
      - 2. 函数执行过程没有副作用


### (四) redux使用流程
  
  1. 定义动作类型 `action type`

  2. 定义项目的默认状态， 传入`reducer`
   
  3. 编写 `reducer` 实现更新 `state` 的具体逻辑
   
  4. 创建 `store` 容器, 传入 `ruducer`
  
  5. 订阅需要的方法，当 `state` 改变会自动更新
  
  6. 在需要更新 `state` 的地方调用 `dispatch`





#### 参考
 * [redux中文文档](http://cn.redux.js.org/)
 * [一个小项目让你学会使用redux](https://www.jianshu.com/p/786e7174b0c2)