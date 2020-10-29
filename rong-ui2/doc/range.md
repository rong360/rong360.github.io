## Range 滑动范围


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
import {range} from 'rong-ui2';
Vue.use(range)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html

<template>
<div class="wrap">
	<div class="exp">	
		<div class="tip">效果一</div>
    {{config0.amount}}
    <Range v-model="config0.amount" :min="config0.min" :max="config0.max" :step="config0.step">
      <span slot="start">{{config0.min}}</span>
      <span slot="end">{{config0.max}}</span>
    </Range>

    <br><br>

    <div class="tip">效果二</div>
    <div class="range-title">{{config1.amount}}</div>
    <Range v-model="config1.amount" :min="config1.min" :max="config1.max" :step="config1.step">
      <span slot="start" class="decrease" @click="decrease">-</span>
      <span slot="end" class="increase" @click="increase">+</span>
    </Range>
    <div class="range-footer">
      <span class="min">{{config1.min}}</span>
      <span class="max">{{config1.max}}</span>
    </div>
	</div>
</div>
</template>
<script>
	export default{
		name: "RangeExp",
		data(){
			return {
        config0: {
          amount: 20000,
          min: 0,
          max: 100000,
          step: 5000
        },
        config1: {
          amount: 10000,
          min: 5000,
          max: 100000,
          step: 5000
        }
			}
    },
    methods: {
      decrease(){
        let amount = this.config1.amount
        amount -= this.config1.step
        amount = Math.max(this.config1.min, amount)
        this.config1.amount = amount
      },
      increase(){
        let amount = this.config1.amount
        amount += this.config1.step
        amount = Math.min(this.config1.max, amount)
        this.config1.amount = amount
      }
    }
	}
</script>

```

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 滑块的值  | number |   |  |
| min  | 最小值  | number |   |  |
| max  | 最大值  | number |   |  |
| step  | 步长  | number |   |  |
| disabled  | 是否禁用  | Boolean |   | false |

### slot

| name      | 说明    |
|---------- |-------- |
| start  | 滑块左侧 |
| end  | 滑块右侧 |


