```js
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
  }

  componentDidMount() {
    this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val) // 第 1 次

    this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val) // 第 2次

    setTimeout(() => {
      this.setState({
        val: this.state.val + 1
      })
      console.log(this.state.val) // 第 3 次

      this.setState({
        val: this.state.val + 1
      })
      console.log(this.state.val) // 第 4 次
    }, 0)
  }

  render() {
    return null
  }
}
```





https://muyiy.cn/question/frame/19.html
