## Toast 提示


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
import {Toast} from 'rong-ui2';
Vue.use(Toast)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```js

this.$toast({
    propsData: {
        message: '芭芭拉小魔仙，变身!',
        type: 'positive',
        time: 5000
    },
    methods: {
        callback(){
            self.count++;
        }
    }
});

this.$toast("芭芭拉小魔仙，变身");

```

### Attributes

toast实例方法通过`子类组件`覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

#### propsData属性传入的数据如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| wrapStyleObj | 样式 | object | - | `{top: '35%'}` |
| message  | 提示内容    | string   | -  | "" |
| type  | icon类型    | string   | `positive` `negetive` `long` | `long` |
| time  | 多少ms后toast消失    | number   | — | `2000` |

### Events (methods属性下)

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| callback  | toast消失时回调函数    | — |

