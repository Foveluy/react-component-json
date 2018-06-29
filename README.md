# react-component-json

这个项目是为了给 rebile 项目书写文档使用的一个工具。使用 babel 分析 react component 的代码输出一个 json 的文件

## 用法

```js
const { json, md } = require("react-component-json");
json(src); ///
md(src); ///
```

## component 目录结构

```yaml
componentName
  - __test__ # 测试相关文件
  - demo.md # 本工具生成的 md 文件
  - demo.js # 这个组件的demo
  - index.js # 这个文件定义了组件的顶层结构
  - index.css # 组件样式
  - 其他....
```

## 工具解析流程

1.  工具读取 index.js 下的组件，统一要以 `export default` 作为规范
2.  组件需要有完整的 props-type 和 default-props ，如果没有或者不完整，则提示出错
3.  读取 demo.js 中的代码和注释，生成 json 数据，使用 json 的数据在该目录下生成 demo.md 描述文件
