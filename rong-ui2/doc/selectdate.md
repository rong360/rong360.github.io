## SelectDate 选择日期

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
import {SelectDate} from 'rong-ui2';
Vue.use(SelectDate)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<SelectDate :attrs="config" v-model="config.value"></SelectDate>
```

```js
...
data(){
	return {
		config: {
      title: '爸爸生日',
      name: 'birthday',
      value: '',
      type: '',
      placeholder: '请选择',
      valueFormat: 'yyyy/mm/dd',
      textFormat: 'yyyy年mm月dd日',
      startYear: '',
      endYear: '',
      yearsLength: '4',
      disabled: false,
      yearUnit: '',
      monthUnit: '',
      dateUnit: '',
      pickerTitle: 'hello',
      pickerCancelBtnText: 'cancel',
      pickerConfirmBtnText: 'confirm',
      textPosition: 'right',
      mode: ''
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
### SelectDate基于Datepicker组件开发，Datepicker参数同样适合SelectDate
### SelectDate组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| 同Datepicker ...  |     |    |  |  |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 默认值 | string | | |
| placeholder  | 输入框提示文案    | string   | | `` |
| disabled  | 输入框是否禁用   | boolean   |  | `false` |
| unit  | 输入项单位    | string   |  | `""` |
| rules  | 类iview风格的校验规则    | array   |  | `[{required: true, message:'xxx不能为空', trigger:'blur'}]` |
| mode  | title添加css效果    | string   | `default` `to-top`  | `default` |



### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-confirm  | 键盘收起事件    | （{year: "", month: "", date: "", value: ""}） - 年，月，日，选择值 |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | 日期后面可以通过slot插入icon等    | 

