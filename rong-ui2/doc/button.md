## Button 按钮


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
import {Button} from 'rong-ui2';
Vue.use(Button)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)
```
```html
<Button type="warning" :radius="true" :fill="false" :btnStyle="btnStyle" @on-click="doClick">
		圆角 空心 示警 自定义宽度
</Button>
```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 按钮类型   | string   | `default` `warning` `disabled`  | `default` |
| radius  | 按钮是否有圆角    | boolean   | `true` `false` | `false` |
| fill  | 背景是否填充    | boolean   | `true` `false` | `true` |
| btnStyle  | 自定义样式    | object   | | `{}` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-click  | 点击button回调函数  |  event |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | button内容    | 
