## Titlebar 标题

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



    组件含有三个具名slot，slot=l是左侧内容区，slot=r是右侧内容区，slot=c是标题内容区
    默认slot=l里, 当传入backurl时，出现返回按钮，点击返回，触发事件onback
    默认slot=c里，显示标题

### 基本用法

#### 组件引入

```js
import "rong-ui/components/rong-ui.css"
import {rTitlebar} from "rong-ui"
Vue.use(rTitlebar)
```

or

```js
import rTitlebar from "rong-ui/components/rTitlebar"

Vue.use(rTitlebar)

```
```html

<rTitlebar theme="d" title="主题d">
    <div slot="l" @click="goHome">首页</div>
    <div slot="r" @click="goCenter">账户</div>
</rTitlebar>

```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | 标题文案   | string   |   | |
| theme  | 标题栏背景主题    | string   | `a` `b` `c` `d` `e` | `a` |
| showBackto  | 是否显示返回按钮    | Boolean   |  |   `true`  |
| tbStyle  | 标题栏自定义样式    | object   | | `{}` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onback  | 点击返回按钮触发的操作    |  |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| l  | 左侧内容区    | 
| c  | 中间内容区，默认显示标题    | 
| r  | 右侧内容区    | 
