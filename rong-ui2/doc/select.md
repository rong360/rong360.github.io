## Input 输入框

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui2/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/52/2b/522b2db3748056c80e21fda4921c8123.png)


**输入框组件，可以进行扩展变成更丰富的输入组件，如图片验证码**

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
import {Select} from 'rong-ui2';
Vue.use(Select)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<Select :attrs="user" v-model="user.value"></Select>
```

### Select props
| 属性      | 说明    | 类型      |  可选值      |默认值       |
|---------- |-------- |---------- |-------------  |-------------  |
| attrs | 表单配置项 | object | - | {}|
| placeholder | 占位文本 | string | - | - |
| label-width | lebel标签宽度 | string | 如 `150px` `10rem`等 |-|
| label-position | label标签对齐方式 | string | `left` `right` `top`  | `left` |
| text-position | select文字对齐方式 | string | `left` `center` `right`  | `left` |
| cancel-btn-text | 取消按钮文案 | string |   | `取消` |
| confirm-btn-text | 确认按钮文案 | string |   | `确认` |
| select-arrow-style | 清空按钮样式 | object | - | {} |
| show-message | 是否显示错误信息 | boolean | - | true |


### Select组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 默认值 | string | | |
| placeholder  | 输入框提示文案    | string   | | `` |
| disabled  | 输入框是否禁用   | boolean   |  | `false` |
| readonly  | 输入框是否只读    | boolean   |  | `false` |
| unit  | 输入项单位    | string   |  | `""` |
| cancelBtnText  | 取消按钮文案    | string   |  | `取消` |
| confirmBtnText  | 确定按钮文案    | string   |  | `取消` |
| rules  | 类iview风格的校验规则    | array   |  | `[{required: true, message:'xxx不能为空', trigger:'blur'}]` |

	特别说明，rules校验规则文档详见https://www.npmjs.com/package/async-validator
### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-confirm | 确定按钮 | selectedOption |

### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getValue | 获取当前组件表单数据 | | {name: name, value: value} |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| prepend  | 前置内容 | 
| append  | 后置内容 | 
| arrow-icon  | 右侧箭头 | 


#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rSelect.png"/></div>

```bash
<template>
  <div class="select-example">
    <Titlebar theme="b"
              @on-back="onBack">Select</Titlebar>
    <div class="list">
      请选择以下信息：
      <Form ref="form">
        <Select :attrs="config"
                v-model="config.value"
                ref="select1"></Select>
        <Select :attrs="config2"
                v-model="config2.value"
                ref="select2"></Select>
        <Select :attrs="config3"
                v-model="config3.value"
                ref="select3"></Select>
        <button @click="doChangeData">点击改变人群类别data</button>
        <div class="btn-wrap">
          <Button @on-click="getValue1">获取人群类别数据</Button>
          <Button @on-click="getValue2">获取人贷款期限数据</Button>
          <Button @on-click="getValue3">获取教育程度数据</Button>
        </div>

        <div class="btn-wrap">
          <Button @on-click="getValue4">借助Form组件获取所有数据</Button>
        </div>
      </Form>
    </div>
  </div>

</template>

export default {
  name: "SelectExp",
  data () {
    return {
      config: {},
      config0: {
        title: "人群类别-before",
        name: "population_category0",
        value: '',
        data: [
          {
            text: '企业主',
            value: 'office_lady',
            children: [
              {
                componentType: 'Input',
                type: "number",
                title: "每月收入流水",
                unit: "万元",
                name: "waterflow",
                value: "",
                placeholder: "请输入每月收入流水"
              }
            ]
          },
          {
            text: '医生',
            value: 'doctor',
            children: [
              {
                type: "Select",
                title: "职位",
                name: "free_type",
                value: 2,
                data: [
                  {
                    text: "院长",
                    value: 0
                  },
                  {
                    text: "主任医师",
                    value: 1
                  },
                  {
                    text: "副主任医师",
                    value: 2
                  },
                  {
                    text: "住院医",
                    value: 3
                  },
                  {
                    text: "医学生",
                    value: 4
                  }
                ]
              }
            ]
          }
        ]
      },
      config1: {
        title: "人群类别-after",
        name: "population_category1",
        value: '',
        data: [
          {
            text: '上班族',
            value: 'office_lady',
            children: [
              {
                componentType: 'Input',
                type: "text",
                title: "姓名(无需校验)",
                name: "username",
                value: '',
                placeholder: "请输入用户姓名",
                rules: []
              },
              {
                componentType: 'Input',
                type: "IDCard",
                title: "身份证号码",
                name: "idcard",
                value: '',
                placeholder: "请输入身份证号码"
              },
              {
                componentType: 'Input',
                type: "tel",
                title: "手机号码",
                name: "mobile",
                value: '',
                placeholder: "请输入您的手机号码"
              }
            ]
          },
          {
            text: '学生',
            value: 'student',
            children: [
              {
                componentType: 'Input',
                type: "number",
                title: "每月花费",
                name: "expense",
                value: '',
                unit: "元",
                placeholder: "请输入您每月生活费"
              },
              {
                type: "Select",
                title: "爱好",
                name: "interest",
                value: 'maishu',
                data: [
                  {
                    text: "买书",
                    value: 'maishu',
                    children: [
                      {
                        type: "Select",
                        title: "书籍类型",
                        name: "book_type",
                        value: 'xiaoshuo',
                        data: [
                          {
                            text: '外语',
                            value: 'waiyu'
                          },
                          {
                            text: '汉语',
                            value: 'hanyu'
                          },
                          {
                            text: '小说',
                            value: 'xiaoshuo'
                          }
                        ]
                      },
                      {
                        componentType: 'Input',
                        type: "number",
                        title: "买书花费",
                        name: "buy_book_expense",
                        value: '',
                        unit: "元",
                        placeholder: "请输入您每月买书费用"
                      }
                    ]
                  },
                  {
                    text: "娱乐",
                    value: '娱乐'
                  }
                ]
              }
            ]
          },
          {
            text: '自由职业者',
            value: 'free',
            children: [
              {
                type: "Select",
                title: "自由职业者类型",
                name: "free_type",
                value: 1,
                data: [
                  {
                    text: "微商",
                    value: 0
                  },
                  {
                    text: "网络小说写手",
                    value: 1
                  }
                ]
              }
            ]
          }
        ]
      },
      config2: {
        title: "贷款期限",
        name: "loan_term",
        value: '2',
        lr: "right",
        placeholder: "请选择贷款期限",
        data: [{
          text: "1个月",
          value: "1"
        }, {
          text: "2个月",
          value: '2'

        }, {
          text: "36个月",
          value: "36"
        }, {
          text: "自己输入",
          value: "0",
          children: [{
            componentType: 'Input',
            type: "number",
            title: "输入您的贷款期限",
            name: "m_term",
            value: "",
            unit: "个月",
            placeholder: "请输入您期望的贷款期限",
            rules: [{
              validator (rule, value, callback) {
                if (value > 12) {
                  return new Error('贷款期限最长12个月，以为您变更为12个月')
                } else if (value < 3) {
                  return new Error('贷款期限最长12个月，以为您变更为12个月')
                }
                callback()
              },
              trigger: 'blur'
            }]
          }]
        }],
        rules: [{
          validator (rule, value, callback) {
            if (value == 1) {
              this.$toast('目前暂不支持1个月的贷款，请选择贷款期限');
              return new Error('目前暂不支持1个月的贷款，请选择贷款期限')
            }
            callback()
          },
          trigger: 'blur'
        }]
      },
      config3: {
        title: "教育程度",
        name: "education",
        value: '2',
        lr: "right",
        placeholder: "请选择贷款期限",
        readonly: true,
        data: [{
          text: "硕士及以上",
          value: "1"
        }, {
          text: "本科",
          value: '2'

        }, {
          text: "大专",
          value: "3"
        }, {
          text: "中专/高中及以下",
          value: "4"
        }]
      }
    }
  },
  created () {
    this.config = this.config0;
  },
  methods: {
    doChangeData () {
      if (this.config.name == "population_category0") {
        this.config = this.config1;
      } else {
        this.config = this.config0;
      }
    },
    getValue1 () {
      let obj = this.$refs.select1.getValue()
      this.$dialog({
        propsData: {
          message: `<div style="word-break: break-all">${JSON.stringify(obj)}</div>`,
          showCancelBtn: false
        },
        methods: {
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    getValue2 () {
      let obj = this.$refs.select2.getValue()
      this.$dialog({
        propsData: {
          message: `<div style="word-break: break-all">${JSON.stringify(obj)}</div>`,
          showCancelBtn: false
        },
        methods: {
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    getValue3 () {
      let obj = this.$refs.select3.getValue()
      this.$dialog({
        propsData: {
          message: `<div style="word-break: break-all">${JSON.stringify(obj)}</div>`,
          showCancelBtn: false
        },
        methods: {
          onConfirm () {
            this.remove()
          }
        }
      })
    },
    getValue4 () {
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
    onBack () {
      this.$router.push('/')
    }
  }
}
```

