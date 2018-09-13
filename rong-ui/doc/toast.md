## Toast 提示


#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



**包含了常用的 Dialog 弹框**

![Alt text](https://rong360.github.io/rong-ui/assets/images/toast.jpg)

### 基本用法

#### 函数调用
挂载在vue.prototype上，vue实例中，直接使用this.$toast({options})使用。

```js
import "rong-ui/components/rong-ui.css"
import {Toast} from "rong-ui"
Vue.use(Toast)
```

or

```js
import Toast from "rong-ui/components/toast"

Vue.use(Toast)

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

