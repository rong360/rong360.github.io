## select 下拉列表

### 基本用法

#### 全局组件引入


```js
import {rSelect} from "rong-ui"

Vue.use(rSelect)
```
```html
<rSelect :attrs="config" :ref="config.name"></rSelect>
```
```js
config: {
	title: "贷款期限",
	name: "loan_term",
	value: '2',
	placeholder: "请选择贷款期限",
	data:[{
		text:"1个月",
		value: "1"
	},{
		text:"2个月",
		value: '2'

	},{
		text:"36个月",
		value:"36"
	},{
		text: "自己输入",
		value: "0",
		children: [{
			type:"rInt", 
			title: "输入您的贷款期限",
			name: "m_term",
			unit: "个月",
			placeholder: "请输入您期望的贷款期限"
		}]
	}],
	verify(val, selectedIndex){
		if(val.value == 1){
			this.$toast('目前暂不支持1个月的贷款，请选择贷款期限');
			return false;
		}else{
			return true;
		}
	}
}
```

### Attributes

### Select组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 下拉列表初始化值 | string、number | | |
| data  | 列表数据    | Array<{text:"展示文案"，value:"选项值"，children:[{列表下级组件配置信息}]}>   |  |  |
| lr  | 数字输入框对齐方式    | string   | `left` `right` | `right` |
| lblWidth | 输入左对齐时，label文案的宽度 | string | | eg. "3em"、"100px"|
| placeholder  | 数字输入框提示文案    | string   | | `请输入` |
| disabled  | 数字输入框是否禁用   | boolean   |  | `false` |
| readonly  | 数字输入框是否只读    | boolean   |  | `false` |
| needVerify  | 提交时是否需要校验   | boolean   |  | `true` |
| verify  | 数字校验函数   | function   |  | `非空校验` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onconfirm | 点确定按钮的回调函数 | ({text:"展示文案"，value:"选项值"}) - 当前选中值 |

### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getSerialize | 获取当前组件表单数据，包含children数据 | | key=value |
| getSerializeArray | 获取当前组件表单数据，包含children数据 | | {key: value} |



