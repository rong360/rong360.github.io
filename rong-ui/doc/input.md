## Input 输入框

**输入框组件，可以进行扩展变成更丰富的输入组件，如图片验证码**

### 基本用法

#### 全局组件引入


```js
import {rInput} from "rong-ui"

or

import rInput from "rong-ui/components/rInput"

Vue.use(rInput)
```
```html
<rInput 
    :attrs="item.config" 
    :ref="item.config.name" 
    @onclickLabelIcon="onclickLabelIcon"
	@onclickInputIcon="onclickInputIcon" 
	@oninput="oninput"
>
</rInput>
```

### Attributes

### Input组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 默认值 | string | | |
| lr  | 输入框对齐方式    | string   | `left` `right` | `right` |
| lblWidth | 输入左对齐时，label文案的宽度 | string | | eg. "3em"、"100px"|
| placeholder  | 输入框提示文案    | string   | | `请输入` |
| maxlength  | 输入框最大输入长度    | number   |  |  |
| disabled  | 输入框是否禁用   | boolean   |  | `false` |
| readonly  | 输入框是否只读    | boolean   |  | `false` |
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
| onchange  | 输入变化    | (e,component） e-事件，component-当前组件实例 |
| onfocus  | 聚焦    | (e,component） e-事件，component-当前组件实例 |
| onblur  | 失焦    | (e,component） e-事件，component-当前组件实例 |
| onenter | 回车键 |  (e,component） e-事件，component-当前组件实例 |
| onclear | 清空输入时触发的事件 |  （component）  |
| onclickLabelIcon | 点击表单名称后的icon | （component）|
| onclickInputIcon | 点击表单input后的icon | （component）|

### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getSerialize | 获取当前组件表单数据 | | key=value |
| getSerializeArray | 获取当前组件表单数据 | | {key: value} |

### slot

input组件有个不具名slot,便于用户拓展，比如拓展成图片验证码组件

