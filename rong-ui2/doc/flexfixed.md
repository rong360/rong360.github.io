## rFlexFixed 吸顶或吸底(flex布局)

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui2/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/52/2b/522b2db3748056c80e21fda4921c8123.png)


### 基本用法

#### 组件引入

```js
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "rong-ui2",
    "libraryDirectory": "src/components"
  }]]
}

然后这样按需引入组件，就可以减小体积了：
import {FlexFixed} from 'rong-ui2';
Vue.use(FlexFixed)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)
```

```html
<template>
  <FlexFixed @on-scroll="scroll" @on-scroll-debounce="scrollDebounce">
    <Titlebar slot="header"></Titlebar> 
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
    <Button slot="footer">下一步</Button>
  </FlexFixed>
</template>
```

```js
  methods: {
    scroll ({scrollTop, maxScrollTop, direction}) {
      if( (maxScrollTop-scrollTop) < 10 ){
          console.log('滚动底啦~')
      }
    },
    scrollDebounce ({scrollTop, maxScrollTop, direction}) {
      if( (maxScrollTop-scrollTop) < 10 ){
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
| on-scroll  | 滚动事件    | ({scrollTop, maxScrollTop, direction}）|
| on-scroll-debounce  | 滚动事件    | ({scrollTop, maxScrollTop, direction}）|


### 特别提示：嵌套overflow-x:scroll 或 overflow-y:scroll滚动元素时需在滚动元素上添加scroll-area样式
```html
如<div style="overflow-x:scroll" class="scroll-area"></div>
```





