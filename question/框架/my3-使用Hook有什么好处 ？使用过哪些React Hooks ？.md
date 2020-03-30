# 使用过哪些 hooks？及其含义和用法

1. useState

state hook 类似于 class Component 中去定义 state 和调用 setState() 去修改 state 的值

```js
const [count, setCount] = useState(0)
```

`useState` 的入参只有一个，就是 state 的初始值
这个初始值可以是一个数字、字符串或对象，甚至可以是一个函数。当入参是一个函数的时候，这个函数只会在这个组件初始渲染的时候执行

useState 的返回值是一个数组，数组的第一个元素是 state 当前的值，第二个元素是改变 state 的方法。

2. useEffect

Effect Hook 是专门用来处理副作用的。什么是副作用？网络请求、订阅某个模块或者 DOM 操作都是 React 中副作用的例子

正常情况下，在`Function Component` 的函数体中，是不建议写副作用代码的，否则容易出 bug。

使用 `useEffect` 可以模拟出 componentDidMount、componentWillUnmount

useEffect 会在每次 DOM 渲染后执行，不会阻塞页面渲染。它同时具备 componentDidMount、componentDidUpdate 和 componentWillUnmount 三个生命周期函数的执行时机。

3. useContext

`useContext` 可以很方便的去订阅 context 的改变，并在合适的时候重新渲染组件。

我们先来熟悉下标准的 context API 用法：

```js
// createContext()
const ThemeContext = React.createContext('light')

// 将 Context.Provider 放在顶层
<ThemeContext.Provider value="dark">
  <Toolbar />
</ThemeContext.Provider>

// 在子组件中使用 contextType 或 Context.Consumer 来取值
 <ThemeContext.Consumer>
  {value => <Button theme={value} />}
</ThemeContext.Consumer>

```

以上是基础 Hook

4. useReducer

`useReducer` 的用法跟 `Redux` 非常相似，当 `state` 的计算逻辑比较复杂又或者需要根据以前的值来计算时，使用这个 Hook 比 `useState` 会更好。

5. useCallBack useMemo

useCallback 和 useMemo 设计的初衷是用来做性能优化的

useCallback 缓存的是方法的引用，而 useMemo 缓存的则是方法的返回值。

`useCallback` 可以用来包裹一个方法，在 `[]` 传入依赖，在依赖不变的情况下 (在我们的例子中是 count )，它会返回相同的引用，避免子组件进行无意义的重复渲染

```js
function Foo() {
  const [count, setCount] = useState(0)

  const memoizedHandleClick = useCallback(
    () => console.log(`Click happened with dependency: ${count}`),
    [count]
  )
  return <Button onClick={memoizedHandleClick}>Click Me</Button>
}
```

useMemo 可以用来包裹一个组件，使用场景是减少不必要的子组件渲染

```js
function Parent({ a, b }) {
  // 当 a 改变时才会重新渲染
  const child1 = useMemo(() => <Child1 a={a} />, [a])
  // 当 b 改变时才会重新渲染
  const child2 = useMemo(() => <Child2 b={b} />, [b])
  return (
    <>
      {child1}
      {child2}
    </>
  )
}
```

7. useRef

useRef 就是用来代替类组件中传统 React.createRef() 定义 ref 的方式。

useRef 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

Class Component 获取 ref 的方式如下:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.myRef.current.focus()
  }

  render() {
    return <input ref={this.myRef} type='text' />
  }
}
```

Hooks 的实现方式如下:

```js
unction() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, [])

  return <input ref={myRef} type="text" />;
}
```

8. useImperativeHandle

`useImperativeHandle` 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref `这样的命令式代码。useImperativeHandle` 应当与 `forwardRef` 一起使用

主要是让父组件通过 ref 去调用 子组件中定义的方法。

9. useLayoutEffect

`useLayoutEffect` 的用法跟 `useEffect` 的用法是完全一样的，都可以执行副作用和清理操作。它们之间唯一的区别就是执行的时机。

`useEffect` 不会阻塞浏览器的绘制任务，它在页面更新后才会执行。

而 `useLayoutEffect` 跟 `componentDidMount` 和 `componentDidUpdate` 的执行时机一样，会阻塞页面的渲染。如果在里面执行耗时任务的话，页面就会卡顿。

在绝大多数情况下，useEffectHook 是更好的选择。唯一例外的就是需要根据新的 UI 来进行 DOM 操作的场景。useLayoutEffect 会保证在页面渲染前执行，也就是说页面渲染出来的是最终的效果。如果使用 useEffect，页面很可能因为渲染了 2 次而出现抖动。

10. useDebugValue

# 使用 Hook 有什么好处？

## 参考

https://react.docschina.org/docs/hooks-overview.html
https://segmentfault.com/a/1190000018928587
