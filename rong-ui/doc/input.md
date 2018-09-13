## Input 输入框

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)


**输入框组件，可以进行扩展变成更丰富的输入组件，如图片验证码**

### 基本用法

#### 全局组件引入


```js
import "rong-ui/components/rong-ui.css"
import {rInput} from "rong-ui"
Vue.use(rInput)
```

or

```js
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
| showBottomBorder  | 底部边框是否显示    | boolean   |  | `true` |
| showInputIcon  | 输入框后的图标是否显示    | boolean   |  | `true` |
| inputIconType  | 输入框后的图标类型    | string   | 见Icon组件值 | `close-circled` |
| showLabelIcon  | 表单label后的图标是否显示    | boolean   |  | `false` |
| labelIconType  | 表单label后的图标类型    | string   | 见Icon组件值 | `info` |
| showLabel  | 表单label是否显示    | boolean   |  | `true` |
| needVerify  | 提交时是否需要校验   | boolean   |  | `true` |
| needVerifyToast  | 默认非空校验没通过时是否出toast提示   | boolean   |  | `true` |
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




#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rInput.png"/></div>

```bash
<template v-for="item in items">
  <component :is="item.type" :attrs="item.config" :ref="item.config.name" @onclickLabelIcon="onclickLabelIcon" @onclickInputIcon="onclickInputIcon" @oninput="oninput" ></component>
</template>
<div class="btn" @click="doSubmit">提交</div>

<div class="tip">以下为输入框左对齐</div>
<template v-for="item in items1">
  <component :is="item.type" :attrs="item.config" :ref="item.config.name"></component>
</template>

export default{
  name: "rInputExp",
  data(){
    return {
      items: [
        {
          type: "rInput",
          config: {
            title: "爸爸的名字",
            name: 'fatherName',
            value: "",
            placeholder: "请输入马云",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            verify: function(value){
              if(value != "马云"){
                this.$toast("请输入马云爸爸的名字！");
                return false;
              }else{
                return true;
              }
            }
          }
        },
        {
          type: "rInput",
          config: {
            title: "爸爸有多少钱",
            name: 'fatherMoney',
            value: "",
            placeholder: "请输入十个亿",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            inputIconType: 'info',
            verify: function(value){
              var reg = /^[0-9]*[1-9][0-9]*$/;

              if(!reg.test(value)){
                this.$toast("马云爸爸的钱填正整数！");
                return false;
              }else{
                return true;
              }
            }
          }
        },
        {
          type: "rInput",
          config: {
            title: "爸爸儿子的名字",
            name: 'sonName',
            value: "",
            placeholder: "请输入王思聪",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            showLabelIcon: true,
            labelIconType: 'addrlist'
          }
        },
        {
          type: "rInput",
          config:  {
            title: "爸爸儿子女友的数目",
            name: 'girlfriend',
            value: "",
            placeholder: "随你所想 不超过三位数",
            maxlength: 3,
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '个',
            showInputIcon: false
          }
        },
        {
          type: "rInput",
          config:  {
            title: "想不想成为爸爸的儿子",
            name: 'beSon',
            value: "想(readonly)",
            readonly: true,
            placeholder: "一定要",
            disabled: 'disabled',
            autofocus: false,
            unit: ''
          }

        }
      ],
      items1: [
        {
          type: "rInput",
          config: {
            title: "登录名",
            name: 'uName',
            value: "",
            placeholder: "邮箱/手机号/昵称",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            lr: "left",
            lblWidth: "4em"
          }
        },
        {
          type: "rInput",
          config: {
            title: "登录密码",
            name: 'uPwd',
            value: "",
            placeholder: "6-12位数字加字母",
            disabled: false,
            readonly: false,
            autofocus: false,
            unit: '',
            inputIconType: 'info',
            lr: 'left',
            lblWidth: "4em"
          }
        }
      ]
    }
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.items[0].config.value = '老马';
    }, 2000)
  },
  methods: {
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key][0].verify();
        if(!pass){
          break;
        }
      }
      if(pass) {
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key][0].getSerialize());
          Object.assign(sa,this.$refs[key][0].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:"验证通过！ 序列化数据为："+s.join("&")
          },
          methods: {
            onConfirm: function(){
              this.remove();
              alert("序列化数组："+JSON.stringify(sa));
            }
          }
        });
      }
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title
        }
      })
    },
    oninput(e, component){
      if(component.conf.name == 'girlfriend' || component.conf.name == 'fatherMoney'){
        var target = e.target,
          value = target.value;
        value = value.replace(/[０１２３４５６７８９]/g, function(v){
          return v.charCodeAt(0)-65296;}
        );
          component.currentValue = value.replace(/[^\d]/g,'');
      }
    }
  }

}
```

