## Swipwer 按钮


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
import {Switch} from 'rong-ui2';
Vue.use(Switch)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<r-switch v-model="switchVal"></r-switch>
```

### Swiper Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 绑定的值，可使用 v-model 双向绑定   | Boolean  | `true` `false` | `false` |
| disabled  |禁用开关   | Boolean  | `true` `false` | `false` |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-change  | 开关变化时触发，返回当前的状态  |`true` `false` |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| open  | 自定义显示打开时的内容  | 
| close  | 自定义显示关闭时的内容  | 



### SwiperItem Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| styleObj  | SwiperItem样式   | object   |  | `{}` |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-click  | 点击SwiperItem回调函数  |  event |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | 内容    | 
