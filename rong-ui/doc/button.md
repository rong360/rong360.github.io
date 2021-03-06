## Button 按钮


#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)


### 基本用法

#### 组件引入

```js
import "rong-ui/components/rong-ui.css"
import {rButton} from "rong-ui"
Vue.use(rButton)
```
or
```js
import rButton from "rong-ui/components/rButton"

Vue.use(rButton)
```
```html
<rButton type="warning" radius="on" fill="off" :btnStyle="btnStyle" @click="doClick">
		圆角 空心 示警 自定义宽度
</rButton>
```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 按钮类型   | string   | `default` `warning` `disabled`  | `default` |
| radius  | 按钮是否有圆角    | string   | `on` `off` | `off` |
| fill  | 背景是否填充    | string   | `on` `off` | `on` |
| btnStyle  | 自定义样式    | object   | | `{}` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击button回调函数  |  event |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | button内容    | 
