# react-router 相关

### 1.react-router 和 react-router-dom
  #### 1.1 React-router
    React-router 提供一些router的核心api, 包括Router, Route, Switch等，但是它没有提供dom操作进行跳转的api。
  #### 1.2 React-router-dom
    React-router-dom 提供了BrowserRouter, Route, Link等api, 我们可以通过dom的事件控制路由。
    例如点击一个按钮进行跳转，大多数情况下我们是这种情况，所以在开发过程中，我们更多是使用React-router-dom。


### 2.React-router-dom的核心用法
  #### 2.1 HashRouter
    使用HashRouter，url中会有个#，例如localhost:3000/#，它是通过hash值来对路由进行控制。
    
  ``` js
    import { HashRouter, Route } from 'react-router-dom'
  
    render () {
      return {
        <HashRouter>
          <Route path="/" component={Home}>
        </HashRouter>
      }
    }
  ```

  #### 2.2 BrowserRouter
    BrowserRouter, 它的原理是使用HTML5 history API (pushState, replaceState, popState)来使你的内容随着url动态改变的。
    
  ``` js
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
  
    render() {
      return (
        <Router basename="/react_test">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/singlePage" component={SinglePage} />
            <Route path="/" component={MyLayOut} />
          </Switch>
        </Router>
      )
    }
  ```
  ##### 2.2.1 HTML5 History API
    https://developer.mozilla.org/zh-CN/docs/Web/API/History


  #### 2.3 Route
    Router 路由的一个原材料，它是控制路径对应显示的组件。我们经常用的是exact、path以及component属性。
    
  ``` js
    <Route path="/login" component={Login} />
  ```
      1). exact: 控制匹配到/路径时不会再继续向下匹配。
      2). path: 标识路由的路径。
      3). component: 表示路径对应显示的组件。

  #### 2.4 Link
    Link主要api是to，to可以接受string或者一个object，来控制url。使用方法如下
    
    ```
    ```

  #### 2.5 NavLink
    NavLink它可以为当前选中的路由设置类名、样式以及回调函数等。
    
    ```
    ```

  #### 2.6 Switch
    Switch常常会用来包裹Route，它里面不能放其他元素，用来只显示一个路由。

  #### 2.7 通过a标签跳转

  #### 2.8 通过函数式跳转

  #### 2.9 路由传参

  #### 2.10 隐式传参

  #### 2.11 路由常用函数
    1). replace(): 有些场景下，重复使用push或a标签跳转会产生死循环，为了避免这种情况出现，
        react-router-dom提供了replace。在可能会出现死循环的地方使用replace来跳转：
    
  `this.props.history.replace('/detail')`
    
    2). goback(): 场景中需要返回上级页面的时候使用：
    
  `this.props.history.goBack()`

  #### 2.12 获取当前路由



