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
import {Form} from 'rong-ui2';
Vue.use(Form)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<Form>
  <Input :attrs="user" v-model="user.value"></Input>
  <Select :attrs="user" v-model="user.value"></Select>
</Form>
```

### Input props
| 属性      | 说明    | 类型      |  可选值      |默认值       |
|---------- |-------- |---------- |-------------  |-------------  |
| placeholder | 占位文本 | string | - | - |
| label-width | lebel标签宽度 | string | 如 `150px` `10rem`等 |-|
| label-position | label标签对齐方式 | string | `left` `right` `top`  | `left` |
| text-position | input文字对齐方式 | string | `left` `center` `right`  | `left` |
| input-clear-style | 清空按钮样式 | object | - | {} |
| select-arrow-style | 清空按钮样式 | object | - | {} |
| select-cancel-btn-text | select取消按钮文案 | string | - | `取消` |
| select-confirm-btn-text | select确定按钮文案 | string | - | `确定` |
| show-message | 是否显示错误信息 | boolean | - | true |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-iscompleted | 表单是否填完 | boolean |

### methods
| 名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| validate | 校验所有表单项 | （result, message） |
| validateOneByOne | 逐项校验表单项 |（result, message）|
| getValue | 获取当前组件表单数据 | {name: name, value: value} |
| getSerializeValue | 获取当前组件表单数据 |a=0&b=1 |
| getObjectValue | 获取当前组件表单数据 | {a: 0, b: 1} |
| resetFields | 重置表单 |- |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | 内容 |


#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rInput.png"/></div>

```bash
<template>
  <div class="form-example">
    <Titlebar theme="b"
              @on-back="onBack">Form</Titlebar>
    <Form :select-arrow-style="{color: '#C8C7CC'}"
          :input-clear-style="{color: '#C8C7CC'}"
          @on-iscompleted="setIsCompleted"
          text-position="right"
          placeholder="请输入"
          ref="form">
      <components v-for="item in viewData.firstLevel"
                  v-model="item.value"
                  :is="item.componentType"
                  :attrs="item"
                  :key="item.id"
                  ref="cpList" />
      <div class="btn-wrap">
        <div :class="['btn', isCompleted ? '' : 'disabled']"
             @click="doSubmit">
          <p>提交({{ isCompleted ? "填写完毕" : "未填完" }})</p>
          <p>validate</p>
        </div>
        <div :class="['btn', isCompleted ? '' : 'disabled']"
             @click="doSubmit2">
          <p>提交({{ isCompleted ? "填写完毕" : "未填完" }})</p>
          <p>validateOneByOne</p>
        </div>
        <div class="btn"
             @click="doReset">重设</div>
      </div>
    </Form>
    <div class="result">
      <p v-for="item in viewData.basic"><span>{{item.title}}：</span>{{item.value}}</p>
    </div>
  </div>
</template>

import _ from 'lodash'

let basicInfo = {
  "status": 1,
  "data": {
    "basic": [{
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
      }]
    }, {
      "rely_policy_id": 0,
      "id": "372",
      "category_id": "1",
      "title": "本人身份证号码",
      "var_name": "user_id",
      "type": "5",
      "verify_type": "50",
      "data": "",
      "unit": "",
      "material_type": "100",
      "info_property": "1",
      "level": 1,
      "desc": "",
      "value": "",
      "readonly": 0
    }, {
      "rely_policy_id": 0,
      "id": "264",
      "category_id": "1",
      "title": "职业类别",
      "var_name": "is_op_type",
      "type": "2",
      "verify_type": "0",
      "data": [{
        "value": "1",
        "desc": "企业主",
        "rely": ["206"]
      }, {
        "value": "4",
        "desc": "上班人群",
        "rely": ["59"]
      }, {
        "value": "5",
        "desc": "学生",
        "rely": []
      }],
      "unit": "",
      "material_type": "101",
      "info_property": "0",
      "level": 1,
      "desc": "",
      "value": "4",
      "readonly": 0
    }, {
      "rely_policy_id": "264",
      "id": "59",
      "category_id": "1",
      "title": "月工资收入（元）",
      "var_name": "user_income_by_card",
      "type": "9",
      "verify_type": "0",
      "data": "",
      "unit": "元",
      "material_type": "101",
      "info_property": "1",
      "level": 2,
      "desc": "",
      "value": "7000",
      "readonly": 0
    }, {
      "rely_policy_id": "264",
      "id": "206",
      "category_id": "1",
      "title": "经营流水（对公流水）",
      "var_name": "corporate_flow",
      "type": "9",
      "verify_type": "0",
      "data": "",
      "unit": "",
      "material_type": "102",
      "info_property": "0",
      "level": 2,
      "desc": "",
      "readonly": 0
    }],
    "loan_amount_min": "3000",
    "loan_amount_max": "100000",
    "is_pop": 1,
    "pop_str": "xxxx"
  }
}


function componentfactory (type) {
  var component = { componentType: 'Input', verifyType: 'text' };
  switch (type) {
    case "3":
    case "4":
    case "9":
      component = {
        componentType: 'Input',
        verifyType: 'number'
      }
      break;
    case "email":
      component = {
        componentType: 'Input',
        verifyType: 'email'
      }
      break;
    case "50":
      component = {
        componentType: 'Input',
        verifyType: 'IDCard'
      }
      break;
    case "select":
    case "2":
    case "1":
      component = 'rSelect'
      component = {
        componentType: 'Select',
        verifyType: ''
      }
      break;
  }
  return component;
}

export default {
  beforeRouteEnter (to, from, next) {
    let basic = basicInfo.data.basic,
      basicMap = {},
      firstLevel = []
    _.each(basic, item => {
      let type = item.verify_type == 0 ? item.type : item.verify_type
      item.componentType = componentfactory(type).componentType
      item.type = componentfactory(type).verifyType
      // 用户姓名特殊校验
      if (item.id == 277) {
        item.rules.push({
          validator (rule, value, callback) {
            if (value.length < 3) {
              return new Error('姓名最少三个字')
            }
            callback()
          },
          trigger: 'blur'
        })
      }
      // 申请金额不能为0
      if (item.id == 692) {
        item.rules = [{ required: true, message: '***申请金额不能为空***', trigger: 'blur' }]
        item.rules.push({
          validator (rule, value, callback) {
            if (value == 0) {
              return new Error('申请金额不能为零！')
            }
            callback()
          },
          trigger: 'blur'
        })
      }
      if (item.id == 836) {
        item.componentType = 'Input'
        item.type = 'hidden'
        item.rules = []
        if (window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition && window.navigator.geolocation.getCurrentPosition(function (position) {
            // coords.latitude十进制数的纬度
            // coords.longitude十进制数的经度
            item.value = position.coords.longitude + ',' + position.coords.latitude
          }, function () { }, {
            enableHighAccuracy: true,
            timeout: 45000
          })
        } else {
          _.remove(basic, { id: "836" })
          item.value = '无法获取gps'
          console.log('Your browser does not natively support geolocation.');
        }
      }
      // basic生成map机构，方便数据查找
      basicMap[item.id] = item
      // 数据分级
      if (item.level == 1) firstLevel.push(item)
      // 添加name属性
      item.name = item.id
      item.var_name = ''
    })
    // 构造rSelect的children数据
    _.each(basic, item => {
      if (item.componentType == 'Select') {
        item.data.forEach(option => {
          option.text = option.desc
          if (option.rely && option.rely.length) {
            option.children = option.rely.map(id => {
              return basicMap[id]
            })
          }
        })
      }
    })
    CONST.cache.userbasicinfo = {
      basic: basic,
      firstLevel: firstLevel
    }
    next();
  },
  data () {
    return {
      viewData: CONST.cache.userbasicinfo,
      fields: [],
      isCompleted: false,
      sourceCode
    }
  },
  // computed: {
  //   isCompleted () {
  //     return this.fields.every(field => {
  //       if (field.fieldRules.length) {
  //         return field.currentValue != ''
  //       } else {
  //         return true
  //       }
  //     })
  //   }
  // },
  mounted () {
    this.fields = this.$refs.form.fields
  },
  methods: {
    doSubmit () {
      this.$refs.form.validate((valid, validateMessage) => {
        if (valid) {
          console.log('getValue', this.$refs.form.getValue())
          console.log('getSerializeValue', this.$refs.form.getSerializeValue())
          console.log('getObjectValue', this.$refs.form.getObjectValue())
        } else {
          this.$dialog({
            propsData: {
              message: validateMessage.map(item => item.replace('不能为空', '')).join('、') + '不能为空'
            },
            methods: {
              onConfirm () {
                this.remove()
              }
            }
          })
        }
      })
    },
    doSubmit2 () {
      this.$refs.form.validateOneByOne((valid, validateMessage) => {
        if (valid) {
          console.log('getValue', this.$refs.form.getValue())
          console.log('getSerializeValue', this.$refs.form.getSerializeValue())
          console.log('getObjectValue', this.$refs.form.getObjectValue())
        } else {
          this.$dialog({
            propsData: {
              message: validateMessage
            },
            methods: {
              onConfirm () {
                this.remove()
              }
            }
          })
        }
      })
    },
    setIsCompleted (value) {
      this.isCompleted = value
    },
    doReset () {
      this.$refs.form.resetFields()
    },
    onEnter (e) {
      console.log(e.target.value)
    },
    onBack () {
      this.$router.push('/')
    }
  }
}
```

