## Number 数字

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



**包含了常用的数字类型，整数、浮点数、手机号码、身份证号码、图片验证码组件都是从该组件拓展出的组件**

### 基本用法

#### 全局组件引入


```js
import "rong-ui/components/rong-ui.css"
import {rNumber} from "rong-ui"
Vue.use(rNumber)
```

or

```js
import rNumber from "rong-ui/components/rNumber"

Vue.use(rNumber)

```
```html

<rNumber 
    :attrs="config" 
    :ref="config.name" 
    @onconfirm="confirmHandle" 
    @onclickLabelIcon="LabelIconHandle" 
    @onclickInputIcon="InputIconHandle"
>
</rNumber>

```

```js
... ...

data(){
	return {
		config: {
			title: "马云爸爸的年龄",
			type: 'int',
			name: 'fatherAge',
			value: "",
			placeholder: "请输入",
			disabled: false,
			readonly: false,
			unit: '岁',
			maxlength: 2,
		}
	}
}
 
... ...

```

### Attributes

### Number组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 默认值 | string | | |
| type  | 键盘类型    | string   | `int` `float` `idcard` | `'float'` |
| fixed  | 浮点数小数位位数, `浮点数时有效`   | number   |  |  |
| lr  | 数字输入框对齐方式    | string   | `left` `right` | `right` |
| lblWidth | 输入左对齐时，label文案的宽度 | string | | eg. "3em"、"100px"|
| placeholder  | 数字输入框提示文案    | string   | | `请输入` |
| maxlength  | 数字输入框最大输入长度    | number   |  |  |
| disabled  | 数字输入框是否禁用   | boolean   |  | `false` |
| readonly  | 数字输入框是否只读    | boolean   |  | `false` |
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
| showKeyboardTitle  | 键盘上title是否显示   | boolean   |  | `true` | useSafeKeyboard  | 是否启用安全键盘   | boolean   |  | `true`
| inputType  | 不启用安全键盘时input框类型   | string   |  | `tel`


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| oninput | 输入框输入事件 | value - 当前输入值 |
| onconfirm  | 键盘收起事件    | （code,codeStr,component） code-键盘点击值，codeStr-当前值，component-调起键盘的组件实例 |
| onclear | 清空输入时触发的事件 |  （component）  |
| onclickLabelIcon | 点击表单名称后的icon | （component）|
| onclickInputIcon | 点击表单input后的icon | （component）|

### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getSerialize | 获取当前组件表单数据 | | key=value |
| getSerializeArray | 获取当前组件表单数据 | | {key: value} |

### slot

Number组件有个不具名slot,便于用户拓展，比如拓展成短信验证码组件








#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rNumber.png"/></div>

```bash
<rNumber :attrs="config" :ref="config.name" @onclear="onclear"></rNumber>
<rNumber :attrs="config0" :ref="config0.name"></rNumber>
<rNumber 
  :attrs="config1" 
  :ref="config1.name" 
  @onconfirm="confrimFatherHand" 
  @onclickLabelIcon="onclickLabelIcon" 
  @onclickInputIcon="onclickInputIcon"
>
</rNumber>
<rNumber 
  :attrs="config2" 
  :ref="config2.name"
  @onclickLabelIcon="onclickLabelIcon" 
>
</rNumber>
<rNumber :attrs="config3" :ref="config3.name"></rNumber>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rNumberExp",
  data(){
    return {
      config: {
        title: "马云爸爸有多少钱(覆盖默认校验)",
        name: 'fatherName',
        value: "3000",
        maxlength: 5,
        placeholder: "请输入几个亿",
        disabled: false,
        readonly: false,
        unit: '亿',
        verify(val){
          if(val < 10000){
            this.$toast({
              propsData: {
                message: '你也太小看马玉爸爸了'
              }
            })
            return false;
          }else{
            return true;
          }
        }
      },
      config0: {
        title: "马云爸爸的年龄(maxlength=3)",
        type: 'int',
        name: 'fatherAge',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '岁',
        maxlength: 3
      },
      config1: {
        title: "马云爸爸几个秘书(键盘确认会触发校验)",
        type: 'int',
        name: 'fatherHand',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        inputIconType: 'info',
        verify: function(val){
          if(val===""){
            this.$toast("爸爸的秘书个数-请输入数字！");
            return false;
          }else if(val>3){
            this.$toast("爸爸的秘书个数-输入的数字须小于3！");
            return false;
          }
          return true;
          
        }
      },
      config2: {
        title: "马云爸爸几个老婆",
        name: 'fatherWife',
        value: "1",
        placeholder: "请输入",
        disabled: false,
        readonly: true,
        autofocus: false,
        unit: '(readonly)个',
        showLabelIcon: true,
        labelIconType: 'info'
      },
      config3: {
        title: "马云爸爸的身份证号(键盘类型idcard)",
        type: 'idcard',
        name: 'fatherID',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: ''
      }
    }     
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.config.value = 789;
      self.config.placeholder = 'xxx';
      //self.config.readonly = 'readonly';
      self.config.lr = 'right';
      self.config.type = 'int';
      self.config.maxlength = 8;
      self.config.canDelete = true;
      //self.config.unit = '元';
    }, 2000)
  },
  methods: {
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          break;
        }
      }
      if(pass){
        let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key].getSerialize());
          Object.assign(sa,this.$refs[key].getSerializeArray());
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
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
    },
    confrimFatherHand(){
      this.$refs.fatherHand.verify();
    },
    onclickInputIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title + ' --- 提示信息'
        }
      })
    },
    onclickLabelIcon(e, component){
      this.$toast({
        propsData: {
          message: component.attrs.title+ ' --- 提示信息'
        }
      })
    }
  }
}
```
