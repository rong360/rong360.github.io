## Tabs 标签页

### 基本用法

#### 组件引入

```js
import "rong-ui/components/rong-ui.css"
import {rTabs} from "rong-ui"
Vue.use(rTabs)
```

or

```js
import rTabs from "rong-ui/components/rTabs"

Vue.use(rTabs)

```

```html

<rTabs value=2 @onclick="doClick">
	<rTab label="极速贷" >
		<div class="tab-txt">
			<ul>
				<li>拍拍贷</li>
				<li>积木盒子</li>
				<li>链链金融</li>
			</ul>
		</div>
	</rTab>
	<rTab label="银行贷" index=2>
		<div class="tab-txt" v-html="htmlString"></div>
	</rTab>
</rTabs>

```

### Tabs Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 当前活动的标签页,与tab的index相对应  | string、number  |   | `0` |
| type | 标签页类型 | string | `nail` `line` `card` | `nail` |

### Tab Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label  | 标签名  | string |   | `tab` |
| index | 标签页的index,不传index的默认从0顺次增加 | string,number | | 从0顺次 |

### Tabs Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onclick  | 点击tab回调函数  |  index-rTab的index |


