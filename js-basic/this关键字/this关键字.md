### this关键字

### 1. 了解this

### 2. this的指向问题

### 3. call() 和 apply() 改变this指向

    概述：每个函数都包含两个非继承而来的方法：apply() 和 call()。
          call 与 apply 都属于 Function.prototype 的一个方法，所以每个 function 实例都有 call、apply 属性。

    区别：
        call()：第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。
                在使用call（）方法时，传递给函数的参数必须逐个列举出来。
        apply()：传递给函数的是参数数组

### 4. bind() 改变this指向


### 5. 箭头函数中的this


### 参考：
  [你还没搞懂this？](https://github.com/ljianshu/Blog/issues/7) <br>