## Titlebar 标题

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
import {Titlebar} from 'rong-ui2';
Vue.use(Titlebar)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html

<Titlebar theme="d" title="主题d">
    <div slot="l" @click="goHome">首页</div>
    <div slot="r" @click="goCenter">账户</div>
</Titlebar>

```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | 标题文案   | string   |   | |
| theme  | 标题栏背景主题    | string   | `a` `b` `c` `d` `e` `f` | `a` |
| showBackto  | 是否显示返回按钮    | Boolean   |  |   `true`  |
| backArrowStyle  | 箭头自定义样式    | object   | | `{}` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-back  | 点击返回按钮触发的操作    |  |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| l  | 左侧内容区    | 
| 不具名slot  | 中间内容区，默认显示标题    | 
| r  | 右侧内容区    | 
