# Vue 和 React 在列表渲染中为什么写 key？


## Vue 和 React 中 key 的作用

在 Vue API 文档中，`key` 的值是 `string | number`

我们先看看 Vue 文档对 `key` 属性的描述：

> `key` 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key, Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

React 文档：

> key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

意思就是 `key` 给每一个 vnode 唯一的 id，依靠 `key` ,我们 diff 算法操作可以**更准确、更快速**。



## 参考资料
https://muyiy.cn/question/frame/1.html
https://www.yuque.com/fest/articles/qztgn2
https://cn.vuejs.org/v2/api/#key
https://react.docschina.org/docs/lists-and-keys.html