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
import {TextScroll} from 'rong-ui2';
Vue.use(TextScroll)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<TextScroll :list="list"></TextScroll>


export default {
  data () {
    return {
      list: [
        '让子弹飞一会儿，网络流行词，是2010年末上映的电影《让子弹飞》中的一句对白。'
      ]
    }
  }
}
```

### Steps Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| list  | 文案列表   | Array  |  | `[]` |


### Step slot
| slot名称      | 说明    | 
|---------- |-------- |
| prepend  | scrollbar前插槽 | 
| append  | scrollbar后插槽 | 
