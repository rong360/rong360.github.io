## Datepicker 日期

Datepicker使用了第三方better-picker模块来高仿IOS的UIPickerView组件，相关说明请[点击查看](https://github.com/ustbhuangyi/picker)

日期组件，如果需要作为表单组件，请自行扩展

### 基本用法

#### 全局组件引入


```js

import {rDatepicker} from "rong-ui"

or

import rDatepicker from "rong-ui/components/rDatepicker"


Vue.use(rDatepicker)

```
```html

<rDatepicker :attrs='config'  @onconfirm="doConfirm"></rDatepicker>

```

```js
...
data(){
	return {
		config: {
			value: '2016-02-27',
			format: 'yyyy-mm-dd',
			title: '出生日期',
			yearsLength: '4'
		}
	}
},
methods: {
	doConfirm(date){
		console.log(date);
	}
}
```

### Attributes

### Datepicker组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| format | 日期格式 | string | `年：yyyy` `月：mm` `日：dd` |  `yyyy-mm-dd` |
| type  | 日期类型，年，年月，年月日三种    | string   | `year,month,date` | `date` |
| value | 默认显示日期 | string | | |
| placeholder  | 日期选择提示词    | string   |  | `请选择日期` |
| disabled  | 是否禁用   | boolean   |  | `false` |
| startYear  | 起始年份    | string,number   |  |  this year |
| endYear  | 截止年份    | string,number   |  |  |
| yearsLength  | 年份跨度    | string,number   |  | `10` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onconfirm  | 键盘收起事件    | （{year: "", month: "", date: "", value: ""}） - 年，月，日，选择值 |

