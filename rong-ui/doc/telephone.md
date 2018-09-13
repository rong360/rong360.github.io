## Telephone 手机号码

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



***由Number组件扩展，调起的整数类型键盘，使用方法及属性见Number组件***

*** maxlength=11, 默认校验为 非空 & 已数字1开头的11为数字 ***



### 全局组件引入
```js
  import "rong-ui/components/rong-ui.css"
  import {rTelephone} from 'rong-ui'
  Vue.use(rTelephone);
```

or

```js
  import rTelephone from 'rong-ui/components/rTelephone'
  Vue.use(rTelephone);
```



#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rTelephone.png"/></div>

```bash
<rTelephone :attrs="config" :ref="config.name"></rTelephone>
<rTelephone :attrs="config0" @oninput="oninput" @onclear="onclear" @onconfirm="onconfirm" :ref="config0.name"></rTelephone>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rTelephoneExp",
  data(){
    return {
      phone: "",
      count: 0,
      txt: "",
      config: {
        title: "马云爸爸手机号码(不校验)",
        name: 'fatherPhone',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        needVerify: false
      },
      config0: {
        title: "思聪老公的手机号码(键盘确定时校验)",
        name: 'sonPhone',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: ''
      }
    }
  },
  created(){
    var self = this;
    setTimeout(function(){
      self.config.value = '1328888888';
      self.config.readonly = true;
    }, 2000)
  },
  methods:{
    oninput(val){
      this.phone = val;
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
      this.txt = "执行清空操作次数："+ (++this.count);
    },
    onconfirm(code, codeStr, component){
      //this.$refs.sonPhone.verify();
      component.verify();
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "格式错误~");
          break;
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