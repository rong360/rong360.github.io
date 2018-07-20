## Email 邮箱

*** 组件参数继承rInput组件，attrs新增邮箱列表属性{emailList:[]},事件新增onset ***

*** 已知bug: 滑动穿透，邮箱列表滑动时会会滚动body,解决方案都不太完美。目前只有抓取业务使用，目测不会出这个bug,搁置 ***

### 基本用法

#### 全局组件引入


```js
import {rEmail} from "rong-ui"

or

import rEmail from "rong-ui/components/rEmail"

Vue.use(rEmail)
```
```html
<rEmail 
	:attrs="configs" 
	@oninput="oninput" 
	@onclear="onclear" 
	@onfocus="onfocus"
	@onblur="onblur" 
	@onenter="onenter"
	@onchange="onchange"
	@onclickLabelIcon="onclickLabelIcon"
	@onclickInputIcon="onclickInputIcon"
	:ref="configs.name"
></rEmail>
```
```js

... ... 

date(){
	return {
		config: {
			title: "二哈的邮箱地址",
			lr: "right",
			placeholder: "请输入您狗狗的邮箱地址",
			name: "dog-email",
			showLabelIcon: true,
			emailList:[
				"qq.com",
				"sina.com",
				"sohu.com",
				"163.com",
				"foxmail.com",
				"gmail.com",
				"rong360.com",
				"edu.cn",
				"outlook.com",
				"vip.qq.com",
				"126.com"
			]
		}
	}
}

... ... 

```

### Attributes 

参考Input组件，新增emailList

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| emailList  | 邮箱列表   | array   |  |  |

###Events 

 参考Input组件

| 事件      | 说明    | 参数      | 
|---------- |-------- |---------- |
| onset  | 选择邮箱后触发，比如校验邮箱   | component - 当前组件   |
