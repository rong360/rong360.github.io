## Dialog 弹框

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



**包含了常用的 Dialog 弹框**


![Alt text](https://rong360.github.io/rong-ui/assets/images/dialog.jpg)

### 基本用法

#### 函数调用
挂载在vue.prototype上，vue实例中，直接使用this.$dialog({options})使用。

```js
import "rong-ui/components/rong-ui.css"
import {Dialog} from "rong-ui"
Vue.use(Dialog)
```

or

```js
import Dialog from "rong-ui/components/dialog"

Vue.use(Dialog)

```

```js

var dialog = this.$dialog({
	propsData: {
		//标题
		showTitle: true,
		title: '标题',
		titleStyleObj: {color:'green'},
    },
    methods: {
    	//取消按钮
    	onCancel: function(){
    		this.remove();
    	},
    	//确认按钮
    	onConfirm: function(){
    		alert('点击了确认按钮');
    	}
    }
});

```

####弹窗中插入组件，数据通过rContentData传递
```
this.$dialog({
    propsData: {
        rContentData: {
            user: 'jay',
            vip: 1
        }
    },
    components: {
        rContent: resolve => resolve(require('./repaymentTip.vue'))
    }
})
------ ./repaymentTip.vue ------
<template>
    <div>
        hello {{rContentData.user}}
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'repaymentTip',
        props: {
            rContentData: {
                type: Object,
                default: function(){
                    return {}
                }
            }
        }
    }
</script>
```

```html

<rDialog :showCancelBtn="false" @onConfirm="onConfirm" @onCancel="onCancel">
    <div slot="content" class="hasread" @click="doRead">我已经阅读 <a href="javascript:;">《用户知情书》</a></div>
</rDialog>

```

### Attributes

dialog实例方法通过`子类组件`覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

#### propsData属性传入的数据大致分以下几部分：`弹窗标题`、`弹窗Icon`、`弹窗内容`、`弹窗按钮`

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| showTitle  | 是否显示标题    | boolean   | `true` `false`  | `false` |
| title  | 标题内容    | string   |  | `''` |
| titleStyleObj  | 标题样式    | Object   | — | {} |
| showIcon  | 是否显示icon    | object   | — | `false` |
| icon  | 弹框icon    | string   | `changgui` `shuxie` `beiju` `icon_url` | `changgui` |
| iconStyleObj  | icon样式    | object   | — | {} |
| showCancelBtn  | 是否显示取消按钮   | boolean   | — | `true` |
| cancelBtnText  | 取消按钮文案    | string   | — | `取消` |
| cancelBtnStyleObj  | 取消按钮样式    | object   | — | `false` |
| showConfirmBtn  | 是否显示确认按钮    | boolean   | — | `true` |
| confirmBtnText  | 确认按钮文案    | string   | — | `确认` |
| confirmBtnStyleObj  | 确认按钮样式    | object   | — | {} |
| showCloseBtn  | 是否显示关闭按钮    | boolean   | — | `false` |
| CliperStyleObj  | 遮罩样式    | object   | — |  |
| dlgStyleObj  | 弹框样式    | object   | — |  |
| position  | 弹框位置    | object   | {x: 'left/center/right',y: 'top/center/bottom'} | {x: 'center', y: 'center'} |
| animate  | 是否开启动画，bounceIn、bounceOut    | boolean   | — | `false` |
| canDrag  | 是否需要拖拽    | boolean   | — | `false` |
| message  | 弹框内容（普通文本或简单html）    | string   | — | '' |
| contentStyleObj  | 内容样式    | object   | — | {} |
| rContent | 弹窗内容部分需要插入组件时，通过rContent传入需要插入的组件,例如：```html components: {rContent: require('xxx.vue')}``` | object | - | - |
| rContentData | 弹窗内容部分为rContent组件时，rContentData为组件所需数据，例如：propsData: { rContentData: { message: "hello" }} | object | - | - |
| removeDialogOnHashChange | hash变化时是否移除dialog | boolean | — | `true` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onCancel  | 取消操作    | (e, dialog) |
| onConfirm  | 确认操作    | (e, dialog) |
| onClose  | 关闭操作    | (e, dialog) |
| onMask  | 点击蒙层    | (e, dialog) |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| content  | 弹框内容    | 

### 特别提示
弹框里插入滚动区域时，需在滚动区域上添加"scroll-area"样式，如:
```html
<div class="scroll-area"></div>
```



####弹框显示在底部示例
```
this.$dialog({
    propsData: {
        dlgStyleObj: {width: '100%', borderRadius:0},
        position: {x: 'left', y: 'bottom'},
        animate: true,
        rContentData: {
            user: 'jay',
            vip: 1
        }
    },
    components: {
        rContent: resolve => resolve(require('./repaymentTip.vue'))
    }
})
------ ./repaymentTip.vue ------
<template>
    <div>
        hello {{rContentData.user}}
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'repaymentTip',
        props: {
            rContentData: {
                type: Object,
                default: function(){
                    return {}
                }
            }
        }
    }
</script>
```
