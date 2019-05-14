## rFlexFixed 吸顶或吸底(flex布局)

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)


### 基本用法

#### 组件引入

```js
import "rong-ui/components/rong-ui.css"
import {rFlexFixed} from "rong-ui"
Vue.use(rFlexFixed)
```

or

```js
import rFlexFixed from "rong-ui/components/rFlexFixed"

Vue.use(rFlexFixed)
```

```html
<template>
  <rFlexFixed @scroll="scroll">
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
  </rFlexFixed>
</template>
```

```js
  methods: {
    scroll (scrollTop, maxScrollHeight) {
      if( (maxScrollHeight-scrollTop) < 10 ){
          console.log('滚动底啦~')
      }
    }
  }

```


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | 滚动区域   | 
| header  | 头部   | 
| footer  | 底部   | 


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| scroll  | 滚动事件    | (scrollTop, maxScrollHeight）， scrollTop：当前滚动高度，maxScrollHeight：最大滚动高度 |


### 嵌套overflow-x:scroll 或 overflow-y:scroll滚动元素
```html
在滚动元素上添加rFlexFixed-scroll样式，如<div style="overflow-x:scroll" class="rFlexFixed-scroll"></div>
```

