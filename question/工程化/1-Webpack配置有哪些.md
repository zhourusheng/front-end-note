# 1-Webpack 配置有哪些

## webpack 的五个核心概念

1. Entry

入口（Entry）指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图

2. Output

输出（Output）指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

3. Loader

loader 让 webpack 能够去处理那些非 javascript 文件（webpack 自身只理解 javascript）

4. Plugins

插件（Plugins）可以是用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5. Mode

模式（Mode）指示 webpack 使用相应模式的配置，分为 development 和 production

## 基础配置

### 打包 js/json

### 打包 css/sass/less/stylus

### 打包 html

### 打包 img 图片资源

### 打包 font 字体图标文件

### devServer 本地开发服务器

## 构建环境配置

### 分离 css 文件

### css 前缀兼容性处理

### 压缩 css

### js 语法检查 eslint

### js 兼容性处理 babel

### 压缩 html 和 js

## 参考

https://www.yuque.com/fest/articles/gog8iu#449a648c
