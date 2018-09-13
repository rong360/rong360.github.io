## Idcard 身份证号码

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



***由Number组件扩展，调起的带X的数字键盘，使用方法及属性见Number组件***

*** maxlength=18, 只允许最后一位输入X,其他时候点击X无效 ***



### 全局组件引入
``` bash
  import "rong-ui/components/rong-ui.css"
  import {rIDCard} from 'rong-ui'
  Vue.use(rIDCard);
```

or
``` bash
  import rIDCard from 'rong-ui/components/rIDCard'
  Vue.use(rIDCard);

```



#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rIDCard.png"/></div>

```bash
<rIDCard :attrs="config" :ref="config.name"></rIDCard>
<rIDCard :attrs="config0" @oninput="oninput" @onclear="onclear" @onconfirm="verifyIDCard" :ref="config0.name"></rIDCard>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rIDCardExp",
  data(){
    return {
      phone: "",
      count: 0,
      txt: "",
      config: {
        title: "马云爸爸身份证号码(不校验)",
        name: 'fatherID',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: '',
        canDelete: false,
        needVerify: false
      },
      config0: {
        title: "思聪老公身份证号码(键盘确认时校验)",
        name: 'sonID',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        autofocus: false,
        unit: '',
        canDelete: true
      }
    }
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
    verifyIDCard(code, codeStr, component){
      //this.$refs.sonID.verify();
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
    }
  }
}
```