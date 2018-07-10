## Button 按钮

### 基本用法

#### 组件引入

```
import {rButton} from "rong-ui"
Vue.use(rButton)

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
