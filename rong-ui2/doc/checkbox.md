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
import {Checkbox} from 'rong-ui2';
Vue.use(Checkbox)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
单个复选框，绑定到布尔值：
<Checkbox v-model="checked">北京</Checkbox>
```

```html
多个复选框，绑定到同一个数组：
<Checkbox v-model="fruitList" value="apple">苹果</Checkbox>
<Checkbox v-model="fruitList" value="pear">梨</Checkbox>
<Checkbox v-model="fruitList" value="banana">香蕉</Checkbox>
```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| checkedValue  | 可以使用 v-model 双向绑定数据   | `boolean` `array`   | `true` `false` `[]`  | `true` |
| value  | 复选框的值    | string   |  |  |
| shape  | checkbox形状    | string   | `square` `circle` `rect`| `square` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-change  | 点击checkbox回调函数  |  event |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | checkbox标题   | 
| prepend  | 前置内容(v.1.1.4) | 
