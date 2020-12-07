## Datepicker 日期

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
import {Datepicker} from 'rong-ui2';
Vue.use(Datepicker)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<Datepicker :attrs='config' @onconfirm="birthDate"></Datepicker>
```

```js
...
data(){
	return {
		config: {
			value: '',
			type: '',
			placeholder: '请选择',
			valueFormat: 'yyyy/mm/dd',
			textFormat: 'dd/mm/yyyy',
			startYear: '',
			endYear: '',
			yearsLength: '4',
			disabled: false,
			pickerYearUnit: '',
			pickerMonthUnit: '',
			pickerDateUnit: '',
			pickerTitle: 'hello',
			pickerCancelBtnText: 'cancel',
			pickerConfirmBtnText: 'confirm'
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
| type  | 日期类型，年，年月，年月日三种    | string   | `year,month,date` | `date` |
| value | 默认显示日期 | string | | |
| valueFormat | value日期格式 | string | `yyyy` `yyyy/mm` `yyyy-mm-dd` `yyyy年` `yyyy年mm月dd日`等 |  `yyyy/mm/dd` |
| textFormat | placeholder区域日期显示格式 | string | `yyyy` `yyyy/mm` `yyyy-mm-dd` `yyyy年` `yyyy年mm月dd日`等 |  `yyyy/mm/dd` |
| placeholder  | 日期选择提示词    | string   |  | `请选择日期` |
| disabled  | 是否禁用   | boolean   |  | `false` |
| startYear  | 起始年份    | string,number   |  |  this year |
| endYear  | 截止年份    | string,number   |  |  |
| yearsLength  | 年份跨度    | string,number   |  | `10` |
| pickerYearUnit  | picker年单位    | string   |  | `年` |
| pickerMonthUnit  | picker月单位    | string   |  | `月` |
| pickerDateUnit  | picker日单位    | string   |  | `日` |
| pickerTitle  | picker标题   | string   |  | `` |
| pickerCancelBtnText  | picker取消按钮文案   | string   |  | `取消` |
| pickerConfirmBtnText  | picker确定按钮文案   | string   |  | `确定` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onconfirm  | 键盘收起事件    | （{year: "", month: "", date: "", value: ""}） - 年，月，日，选择值 |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | 日期后面可以通过slot插入icon等    | 

