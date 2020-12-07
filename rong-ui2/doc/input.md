## Input 输入框

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
import {Input} from 'rong-ui2';
Vue.use(Input)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<Input :attrs="user" v-model="user.value"></Input>
```

### Input props
| 属性      | 说明    | 类型      |  可选值      |默认值       |
|---------- |-------- |---------- |-------------  |-------------  |
| attrs | 表单配置项 | object | - | {}|
| placeholder | 占位文本 | string | - | - |
| label-width | lebel标签宽度 | string | 如 `150px` `10rem`等 |-|
| label-position | label标签对齐方式 | string | `left` `right` `top`  | `left` |
| text-position | input文字对齐方式 | string | `left` `center` `right`  | `left` |
| input-clear-style | 清空按钮样式 | object | - | {} |
| show-message | 是否显示错误信息 | boolean | - | true |


### Input组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 表单类型 | string | `text` `number` `tel` `email` `IDCard`  | `text` |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 默认值 | string | | |
| placeholder  | 输入框提示文案    | string   | | `` |
| maxlength  | 输入框最大输入长度    | number   |  |  |
| fixed  | 保留几位小数    | number   |  |  |
| disabled  | 输入框是否禁用   | boolean   |  | `false` |
| readonly  | 输入框是否只读    | boolean   |  | `false` |
| unit  | 输入项单位    | string   |  | `""` |
| rules  | 类iview风格的校验规则    | array   |  | `[{required: true, message:'xxx不能为空', trigger:'blur'}]` |
| mode  | title添加css效果    | string   | `default` `to-top`  | `default` |

	特别说明，rules校验规则文档详见https://www.npmjs.com/package/async-validator

	
### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-input | 输入框输入事件 | event |
| on-change  | 输入变化    | event |
| on-focus  | 聚焦    | event |
| on-blur  | 失焦    | event |
| on-enter | 回车键 |  event |
| on-clear | 清空输入时触发 | event |
| on-keyup | keyup | event |
| on-keydown | keydown | event |

### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getValue | 获取当前组件表单数据 | | {name: name, value: value} |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| prepend  | 前置内容 | 
| append  | 后置内容 | 


#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rInput.png"/></div>

```bash
<template>
  <div>
  	文本 type="text"
    <Input :attrs="user" v-model="user.value"></Input>

    数字(整型) type="number"
    <Input :attrs="age" v-model="age.value"></Input>

    数字(浮点) type="number"
    <Input :attrs="amount" v-model="amount.value"></Input>

    电话 type="tel"
    <Input :attrs="phone" v-model="phone.value"></Input>

    邮箱 type="email"
    <Input :attrs="email" v-model="email.value"></Input>

    国内身份证 type="IDCard"
    <Input :attrs="IDCard" v-model="IDCard.value"></Input>
  </div>
</template>

export default {
  data () {
    return {
      user: {
        "rely_policy_id": 0,
        "id": "277",
        "category_id": "1",
        "title": "本人姓名",
        "placeholder": "",
        "var_name": "bureau_user_name",
        "type": "text",
        "verify_type": "text",
        "data": "",
        "unit": "",
        "material_type": "100",
        "info_property": "1",
        "level": 1,
        "desc": "",
        "value": "",
        "readonly": 0,
        "maxlength": 800,
        "rules": [{
          "required": true,
          "message": "姓名不能为空",
          "trigger": "blur"
        }, {
          validator (rule, value, callback) {
            if (value.length < 3) {
              return new Error('姓名最少三个字')
            }
            callback()
          },
          trigger: 'blur'
        }]
      },
      age: {
        "rely_policy_id": 0,
        "id": "6922",
        "category_id": "1",
        "title": "年龄",
        "var_name": "age",
        "type": "number",
        "verify_type": "0",
        "data": "",
        "unit": "",
        "material_type": "107",
        "info_property": "1",
        "level": 1,
        "desc": "",
        "value": "",
        "fixed": 0,
        "readonly": 0,
        "maxlength": 3
      },
      amount: {
        "rely_policy_id": 0,
        "id": "692",
        "category_id": "1",
        "title": "申请金额",
        "var_name": "application_amount",
        "type": "number",
        "verify_type": "0",
        "data": "",
        "unit": "",
        "material_type": "107",
        "info_property": "1",
        "level": 1,
        "desc": "",
        "value": "10000.00",
        "fixed": 2,
        "readonly": 0,
        "maxlength": 8
      },
      phone: {
        "rely_policy_id": 0,
        "id": "6929",
        "category_id": "1",
        "title": "手机号码",
        "var_name": "phone_number",
        "type": "tel",
        "verify_type": "0",
        "data": "",
        "unit": "",
        "material_type": "107",
        "info_property": "1",
        "level": 1,
        "desc": "",
        "value": "",
        "readonly": 0,
        "maxlength": 11
      },
      email: {
        "rely_policy_id": 0,
        "id": "692999",
        "category_id": "1",
        "title": "邮箱",
        "var_name": "email",
        "type": "email",
        "verify_type": "0",
        "data": "",
        "unit": "",
        "material_type": "107",
        "info_property": "1",
        "level": 1,
        "desc": "",
        "value": "",
        "readonly": 0,
        "rules": [{
          "required": true,
          "message": "邮箱不能为空",
          "trigger": "blur"
        },
        {
          "type": "email",
          "message": "邮箱格式不正确",
          "trigger": "blur"
        }]
      },
      IDCard: {
        "rely_policy_id": 0,
        "id": "372",
        "category_id": "1",
        "title": "本人身份证号码",
        "var_name": "user_id",
        "type": "IDCard",
        "verify_type": "IDCard",
        "data": "",
        "unit": "",
        "material_type": "100",
        "info_property": "1",
        "level": 1,
        "desc": "",
        "value": "",
        "readonly": 0
      }
    }
  },
  methods: {
    onBack () {
      this.$router.push('/')
    }
  }
}
```

