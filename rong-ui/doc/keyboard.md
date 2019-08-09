## Keyboard 数字虚拟键盘



#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)




**包含了常用的 Keyboard 数字虚拟键盘**

### 基本用法

#### 函数调用
挂载在vue.prototype上，vue实例中，直接使用this.$keyborad({options})使用。

```js
import "rong-ui/components/rong-ui.css"
import {Keyboard} from "rong-ui"
Vue.use(Keyboard)
```

or

```js
import Keyboard from "rong-ui/components/keyboard"

Vue.use(Keyboard)
```
```html

this.$keyboard({
    propsData: {
        kid: new Date().getTime(),
        //键盘类型 float、int、idcard
        type: 'int',
        //键盘默认值
        value: document.getElementById('infos').innerHTML,
        //codeStr最大长度
        maxlength: 8
    },
    methods: {
        typing(code, codeStr){
            document.getElementById('infos').innerHTML = codeStr;
        }
    }
})

```

### Attributes

keyboard实例方法通过`子类组件`覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

#### propsData属性传入的数据如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| kid | 键盘id,调起键盘的输入框通过属性[data-keyboardid=kid]与键盘进行关联 | number | | `new Date().getTime()` |
| type  | 键盘类型    | string   | `float` `int` `idcard` | `float` |
| value  | 键盘初始值    | string   |  | `''` |
| maxlength  | 键盘输入最大位数    | number   | — |  |
| fixed  | 浮点数小数位位数    | number   |  |  |
| showKeyboardTitle  | 键盘上title是否显示   | boolean   |  | `true` |

### mothods下提供的Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| typing  | 键盘点击事件    | （code,codeStr） code-键盘点击值，codeStr-当前值 |


### 关于键盘遮挡
如果输入框靠近页面底部，可能会出现键盘遮挡输入框的情况
可在页面生命周期钩子函数中通过window.pageScrollEle指定页面滚动元素解决键盘遮挡问题，如：
```js
mounted(){
    window.pageScrollEle = document.querySelector('#xxx')
    或者
    window.pageScrollEle = this.$refs.xxx
}
```