## FlexFixed 吸顶或吸底(flex布局)

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
import {ActionSheet} from 'rong-ui2';
Vue.use(ActionSheet)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<template>
  <div class="action-sheet-demo">
    <div wrap="p-15" >
      <button @click="showActionSheet = true" >action sheet</button> {{message}}
      <action-sheet v-model="showActionSheet" title="标题" :actions="actions" :show-close-btn="true" :radius="true" @on-select="handleSelect" @on-close="handleClose"></action-sheet>
    </div>
    <div wrap="p-15" >
      <button @click="showCustomActionSheet = true">自定义action sheet内容</button>
      <action-sheet v-model="showCustomActionSheet">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
    </action-sheet>
    </div>
  </div>
</template>
```

```js
export default {
  data () {
    return {
      message: '',
      actions: [
        { name: '选项一', color: 'red' },
        { name: '选项二', disabled: true },
        { name: '选项三' }
      ],
      showActionSheet: false,
      showCustomActionSheet: false
    }
  },
  components: { sourceCode },
  methods: {
    handleSelect (item) {
      this.message = item.name
      this.showActionSheet = false
    },
    handleClose () {
    }
  }
}
```


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| default  | 自定义面板的展示内容   | 


### Action Sheet数据结构

| 键名      | 说明    | 类型      |
|---------- |-------- |---------- |
| name  | 标题   | string |
| color  | 选项文字颜色  | string |
| disabled  | 是否为禁用状态  | boolean |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-select  | 点击选项时触发，禁用或加载状态下不会触发    | (item, index）|
| on-close  | 页面关闭时触发    | - |






