# 概述

## 1.DOM

DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”(Document Object Model)。
它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）

## 2.节点

DOM 的最小组成单位叫节点(node)。文档的树形结构（DOM树），就是又各种不同类型的节点组成。
每个节点可以看作是文档树的一片叶子。

节点的类型有七种。

* `Document`: 整个文档树的顶层节点
* `DocumentType`: `doctype` 标签（比如`<!DOCTYPE html>`）
* `Element`:  网页的各种HTML标签（比如`<body>、<a>`等）
* `Attribute`:  网页元素的属性（比如`class="right"`）
* `Text`: 标签之间或标签包含的文本
* `Comment`:  注释
* `DocumentFragment`: 文档的片段

## 3.节点树