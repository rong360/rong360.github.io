## Dialog 弹框

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui2/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/52/2b/522b2db3748056c80e21fda4921c8123.png)



**包含了常用的 Dialog 弹框**


![Alt text](https://rong360.github.io/rong-ui/assets/images/dialog.jpg)

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
import {Dialog} from 'rong-ui2';
Vue.use(Dialog)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)
```


#### 函数调用
挂载在vue.prototype上，vue实例中，直接使用this.$dialog({options})使用。
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


####template模板中插入Dialog
```html
在template模板中使用时，可借助portal-vue插件，把Dialog显示在文档的任意位置
// https://www.npmjs.com/package/portal-vue
// https://portal-vue.linusb.org/api/portal.html
<template>
    <div>
        <portal to="modal">
            <Dialog :showCancelBtn="false" @on-confirm="onConfirm" @on-cancel="onCancel">
                <p>test</p>
                <div class="hasread" @click="doRead">我已经阅读 <a href="javascript:;">《用户知情书》</a></div>
            </Dialog> 
        </portal>
    </div>
</template>

------ app.vue ------
<template>
  <div id="app">
    <router-view></router-view>
    <portal-target name="modal" multiple />
  </div>
</template>
```

### Attributes

dialog实例方法通过`子类组件`覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

#### propsData属性传入的数据大致分以下几部分：`弹窗标题`、`右上角close按钮`、`弹窗内容`、`弹窗cancel按钮`、`弹窗confirm按钮`

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| showTitle  | 是否显示标题    | boolean   | `true` `false`  | `false` |
| title  | 标题内容    | string   |  | `''` |
| titleStyleObj  | 标题样式    | Object   | — | {} |

| showCloseBtn  | 是否显示关闭按钮    | boolean   | — | `false` |
| closeStyleObj  | 标题样式    | Object   | — | {} |

| message  | 弹框内容（普通文本或简单html）    | string   | — | '' |
| contentStyleObj  | 内容样式    | object   | — | {} |
| rContent | 弹窗内容部分需要插入组件时，通过rContent传入需要插入的组件,例如：```html components: {rContent: require('xxx.vue')}``` | object | - | - |
| rContentData | 弹窗内容部分为rContent组件时，rContentData为组件所需数据，例如：propsData: { rContentData: { message: "hello" }} | object | - | - |

| showCancelBtn  | 是否显示取消按钮   | boolean   | — | `true` |
| cancelBtnText  | 取消按钮文案    | string   | — | `取消` |
| cancelBtnStyleObj  | 取消按钮样式    | object   | — | `false` |

| showConfirmBtn  | 是否显示确认按钮    | boolean   | — | `true` |
| confirmBtnText  | 确认按钮文案    | string   | — | `确认` |
| confirmBtnStyleObj  | 确认按钮样式    | object   | — | {} |

| CliperStyleObj  | 遮罩样式    | object   | — |  |
| dlgStyleObj  | 弹框样式    | object   | — |  |
| position  | 弹框位置    | object   | {x: 'left/center/right',y: 'top/center/bottom'} | {x: 'center', y: 'center'} |

| removeDialogOnHashChange | hash变化时是否移除dialog | boolean | — | `false` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-cancel  | 取消操作    | — |
| on-confirm  | 确认操作    | — |
| on-close  | 关闭点击操作    | — |


### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 无  | 弹框内容    | 

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
