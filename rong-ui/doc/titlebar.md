## Titlebar 标题

    组件含有三个具名slot，slot=l是左侧内容区，slot=r是右侧内容区，slot=c是标题内容区
    默认slot=l里, 当传入backurl时，出现返回按钮，点击返回，触发事件onback
    默认slot=c里，显示标题

### 基本用法

#### 组件引入

```
import {rTitlebar} from "rong-ui"
Vue.use(rTitlebar)

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
| backurl  | 返回按钮点击后要跳转的url    | string   |  |   `""`  |
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
