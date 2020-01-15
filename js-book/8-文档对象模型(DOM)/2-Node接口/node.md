# Node 接口

所有 DOM 节点对象都继承了 Node 接口，拥有一些共同的属性和方法。这是 DOM 操作的基础。

## 1.属性

### 1.1 Node.prototype.nodeType

`nodeType` 属性返回一个整数值，表示节点的类型。

### 1.2 Node.prototype.nodeName

`nodeName` 属性返回节点的名称。

### 1.3 Node.prototype.nodeValue

`nodeValue` 属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。

### 1.4 Node.prototype.textContent

### 1.5 Node.prototype.baseURI

### 1.6 Node.prototype.ownerDocument

### 1.7 Node.prototype.nextSibling

### 1.8 Node.prototype.previousSibling

### 1.9 Node.prototype.parentNode

### 1.10 Node.prototype.parentElement

### 1.11 Node.prototype.firstChild, Node.prototype.lastChild

### 1.12 Node.prototype.childNodes

### 1.13 Node.prototype.isConnected

## 2. 方法

### 2.1 Node.proptotype.appendChild()

`appendChild()` 方法接收一个节点对象作为参数，将其作为最后一个节点，插入当前节点。
该方法的返回值就是插入文档的子节点。

```js
// 创建一个 <p> 节点，将其插入 document.body 的尾部
var p = document.createElement('p')
document.body.appendChild(p) // appendChild() 返回值就是插入文档的子节点
```

### 2.2 Node.proptotype.hasChildNodes()

`hasChildNodes()` 返回一个布尔值，表示当前节点是否存在子节点。

### 2.3 Node.proptotype.cloneNode()

`cloneNode()` 方法用于克隆一个节点。它接收一个布尔值作为参数，表示是否同时克隆子节点。
它的返回值是一个克隆出来的新节点。

### 2.4 Node.proptotype.insertBefore()

### 2.5 Node.proptotype.removeChild()

### 2.6 Node.proptotype.replaceChild()

### 2.7 Node.proptotype.contains()

### 2.8 Node.proptotype.compareDocumentPosition()

### 2.9 Node.proptotype.isEqualNode()、Node.proptotype.isSameNode()

### 2.10 Node.proptotype.normalize()

### 2.11 Node.proptotype.getRootNode()



