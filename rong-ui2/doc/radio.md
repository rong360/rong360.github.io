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
import {Radio} from 'rong-ui2';
Vue.use(Radio)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
单个radio，绑定到布尔值：
<Radio v-model="single">Radio</Radio>
```

```html
多个radio，绑定到同一个字符串：
<Radio v-model="picked" value="apple">苹果</Radio>
<Radio v-model="picked" value="pear">梨</Radio>
<Radio v-model="picked" value="banana">香蕉</Radio>
```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| checkedValue  | 可以使用 v-model 双向绑定数据   | `boolean` `string`   | `true` `false` `""`  | `true` |
| value  | radio的值    | string   |  |  |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-change  | 点击checkbox回调函数  |  event |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | radio标题   | 
