## Number 数字

**包含了常用的数字类型，整数、浮点数、手机号码、身份证号码、图片验证码组件都是从该组件拓展出的组件**

### 基本用法

#### 全局组件引入


```js
import {Number} from "rong-ui"

Vue.use(Number)
```
```html
<rNumber 
    :attrs="config" 
    :ref="config.name" 
    @onconfirm="confirmHandle" 
    @onclickLabelIcon="LabelIconHandle" 
    @onclickInputIcon="InputIconHandle"
>
```

### Attributes

### Number组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| type  | 键盘类型    | string   | `int` `float` `idcard` | `'float'` |
| fixed  | 浮点数小数位位数    | number   |  |  |
| lr  | 数字输入框对齐方式    | string   | `left` `right` | `right` |
| lblWidth | 输入左对齐时，label文案的宽度 | string | | eg. "3em"、"100px"|
| placeholder  | 数字输入框提示文案    | string   | | `请输入` |
| maxlength  | 数字输入框最大输入长度    | number   |  |  |
| disabled  | 数字输入框是否禁用   | boolean   |  | `false` |
| readonly  | 数字输入框是否只读    | boolean   |  | `false` |
| unit  | 输入项单位    | string   |  | `""` |
| showInputIcon  | 输入框后的图标是否显示    | boolean   |  | `true` |
| inputIconType  | 输入框后的图标类型    | string   | 见Icon组件值 | `close-circled` |
| showLabelIcon  | 表单label后的图标是否显示    | boolean   |  | `false` |
| labelIconType  | 表单label后的图标类型    | string   | 见Icon组件值 | `info` |
| needVerify  | 提交时是否需要校验   | boolean   |  | `true` |
| verify  | 数字校验函数   | function   |  | `非空校验` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| oninput | 输入框输入事件 | value - 当前输入值 |
| onconfirm  | 键盘收起事件    | （code,codeStr,component） code-键盘点击值，codeStr-当前值，component-调起键盘的组件实例 |
| onclear | 清空输入时触发的事件 |  （component）  |
| onclickLabelIcon | 点击表单名称后的icon | （component）|
| onclickInputIcon | 点击表单input后的icon | （component）|

### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getSerialize | 获取当前组件表单数据 | | key=value |
| getSerializeArray | 获取当前组件表单数据 | | {key: value} |

### slot

Number组件有个不具名slot,便于用户拓展，比如拓展成短信验证码组件

