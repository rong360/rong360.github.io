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
import {Steps} from 'rong-ui2';
Vue.use(Steps)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<Steps :current="1">
  <Step>基本信息<br>utama</Step>
  <Step>个人信息<br>darurat</Step>
  <Step>联系人<br>wajah</Step>
  <Step>活体识别<br>wajah</Step>
</Steps>
```

### Steps Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| current  | 当前步骤，从 0 开始计数   | Number  |  | `0` |
| progressLine  |当前进度条样式   | Object  |  | `{}` |
| notProgressLine  |未开始进度条样式   | Object  |  | `{}` |


### Step slot
| slot名称      | 说明    | 
|---------- |-------- |
| icon  | 自定义 icon  | 
