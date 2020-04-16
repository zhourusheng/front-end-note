# JSX 转 JS

## 基础语法

JSX

```jsx
<div></div>
```

转成 JS

```js
React.createElement('div', null)
```

```jsx
<div id='root' class='text'>
  <span class='child'>children</span>
  <span class='child'>children</span>
</div>
```

转成 JS

```js
React.createElement(
  'div',
  {
    id: 'root',
    class: 'text'
  },
  React.createElement(
    'span',
    {
      class: 'child'
    },
    'children'
  ),
  React.createElement(
    'span',
    {
      class: 'child'
    },
    'children'
  )
)
```

## 首字母大小

React 组件需要首字母大写的原因是 `React.CreateElement()` 小写会被当成原生的 html 标签，转成字符串，大写开头才会转成变量

```jsx
function Com() {
  return <a>123</a>
}

<Com id='root' class='text'>
  <span class='child'>children</span>
  <span class='child'>children</span>
</Com>
```

```js
function Com() {
  return React.createElement('a', null, '123')
}


React.createElement(
  // 大写时当做变量，小写时当做字符串
  Com,
  {
    id: 'root',
    class: 'text'
  },
  React.createElement(
    'span',
    {
      class: 'child'
    },
    'children'
  ),
  React.createElement(
    'span',
    {
      class: 'child'
    },
    'children'
  )
)
```
