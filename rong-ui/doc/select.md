## select 下拉列表

select使用了第三方better-picker模块来高仿IOS的UIPickerView组件，相关说明请[点击查看](https://github.com/ustbhuangyi/picker)

### 基本用法

#### 全局组件引入


```js

import {rSelect} from "rong-ui"

or

import rSelect from "rong-ui/components/rSelect"

Vue.use(rSelect)

```
```html

<rSelect :attrs="config" :ref="config.name"></rSelect>

```
```js

config: {
	title: "贷款期限",
	name: "loan_term",
	value: '2',
	placeholder: "请选择贷款期限",
	data:[{
		text:"1个月",
		value: "1"
	},{
		text:"2个月",
		value: '2'

	},{
		text:"36个月",
		value:"36"
	},{
		text: "自己输入",
		value: "0",
		children: [{
			type:"rInt", 
			title: "输入您的贷款期限",
			name: "m_term",
			unit: "个月",
			placeholder: "请输入您期望的贷款期限"
		}]
	}],
	verify(val, selectedIndex){
		if(val.value == 1){
			this.$toast('目前暂不支持1个月的贷款，请选择贷款期限');
			return false;
		}else{
			return true;
		}
	}
}

```

### Attributes

### Select组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 下拉列表初始化值 | string、number | | |
| data  | 列表数据    | Array<{text:"展示文案"，value:"选项值"，children:[{列表下级组件配置信息}]}>   |  |  |
| lr  | 数字输入框对齐方式    | string   | `left` `right` | `right` |
| lblWidth | 输入左对齐时，label文案的宽度 | string | | eg. "3em"、"100px"|
| placeholder  | 数字输入框提示文案    | string   | | `请输入` |
| disabled  | 数字输入框是否禁用   | boolean   |  | `false` |
| readonly  | 数字输入框是否只读    | boolean   |  | `false` |
| needVerify  | 提交时是否需要校验   | boolean   |  | `true` |
| verify  | 数字校验函数   | function   |  | `非空校验` |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onconfirm | 点确定按钮的回调函数 | ({text:"展示文案"，value:"选项值"}) - 当前选中值 |

### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getSerialize | 获取当前组件表单数据，包含children数据 | | key=value |
| getSerializeArray | 获取当前组件表单数据，包含children数据 | | {key: value} |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| label  | 表单label    | 





#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rSelect.png"/></div>

```bash
<rSelect :attrs="config1" :ref="config1.name"></rSelect>
<rSelect :attrs="config2" :ref="config2.name"></rSelect>
<rSelect :attrs="config3" :ref="config3.name"></rSelect>
<div class="btn" @click="doSubmit">提交</div>
export default{
  name: "rReginExp",
  data(){
    return {
      config1: {
        title: "人群类别",
        name: "population_category",
        value: '',
        data: [
          {
            text: '上班族',
            value: 'office_lady',
            children: [
              {
                type:"rInput", 
                title: "姓名(无需校验)",
                name: "username",
                needVerify: false,
                placeholder: "请输入用户姓名"
              },
              {
                type:"rIDCard", 
                title: "身份证号码",
                name: "idcard",
                placeholder: "请输入身份证号码"
              },
              {
                type:"rTelephone", 
                title: "手机号码",
                name: "mobile",
                placeholder: "请输入您的手机号码"
              }
            ]
          },
          {
            text: '学生',
            value: 'student',
            children: [
              {
                type:"rInt", 
                title: "每月花费",
                name: "expense",
                unit: "元",
                placeholder: "请输入您每月生活费"
              },
              {
                type: "rSelect",
                title: "爱好",
                name: "interest",
                value: 'maishu',
                data: [
                  {
                    text: "买书",
                    value: 'maishu',
                    children: [
                      {
                        type: "rSelect",
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
                        type:"rInt", 
                        title: "买书花费",
                        name: "buy_book_expense",
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
                type: "rSelect",
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
        lblWidth: "4em",
        lr: "right",
        placeholder: "请选择贷款期限",
        data:[{
          text:"1个月",
          value: "1"
        },{
          text:"2个月",
          value: '2'

        },{
          text:"36个月",
          value:"36"
        },{
          text: "自己输入",
          value: "0",
          children: [{
            type:"rInt", 
            title: "输入您的贷款期限",
            name: "m_term",
            unit: "个月",
            placeholder: "请输入您期望的贷款期限",
            verify(val){
              if(val > 12){
                this.$toast('贷款期限最长12个月，以为您变更为12个月！');
                this.currentValue = 12;
                return false;
              }else if(val < 3){
                this.$toast('贷款期限最短3个月，以为您变更为3个月！');
                this.currentValue = 3;
                return false;
              }else{
                return true;
              }
            }
          }]
        }],
        verify(val, selectedIndex){
          if(val.value == 1){
            this.$toast('目前暂不支持1个月的贷款，请选择贷款期限');
            return false;
          }else{
            return true;
          }
        }
      },
      config3: {
        title: "教育程度",
        name: "education",
        value: '2',
        lblWidth: "4em",
        lr: "right",
        placeholder: "请选择贷款期限",
        readonly: true,
        data:[{
          text:"硕士及以上",
          value: "1"
        },{
          text:"本科",
          value: '2'

        },{
          text:"大专",
          value:"3"
        },{
          text: "中专/高中及以下",
          value: "4"
        }]
      }
    }     
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.config1.title = '人群类别2'
      //self.config1.value = 'office_lady';
    }, 1000)
  },
  methods:{
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast("请输入有效的" + this.$refs[key].attrs.title + "~");
          return;
        }
      }
      if(pass) {
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
    }
  }
}
```


