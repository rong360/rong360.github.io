## Fixed 吸顶或吸底(fixed布局)

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)


### 基本用法

#### 组件引入

```js
import "rong-ui/components/rong-ui.css"
import {rFixed} from "rong-ui"
Vue.use(rFixed)
```

or

```js
import rFixed from "rong-ui/components/rFixed"

Vue.use(rFixed)
```

```html
<template>
  <rFixed>
    <rTitlebar slot="header"></rTitlebar> 
    <p>content 1</p>
    <p>content </p>
    <p>content </p>
    <p>content 2</p>
    <p>content </p>
    <p>content </p>
    <p>content 3</p>
    <p>content </p>
    <p>content </p>
    <p>content </p>
    <p>content 4</p>
    <p>content </p>
    <p>content </p>
    <p>content 5</p>
    <p>content </p>
    <p>content </p>
    <p>content 6</p>
    <p>content </p>
    <p>content </p>
    <p>content 7</p>
    <p></p>
    <rButton slot="footer">下一步</rButton>
  </rFixed>
</template>
```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| paddingTop  | 内容区域距顶部距离   | string   |   | `2.4rem` |
| paddingBottom  | 内容区域距底部距离   | string   |   | `2.4rem` |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | 滚动区域   | 
| header  | 头部   | 
| footer  | 底部   | 