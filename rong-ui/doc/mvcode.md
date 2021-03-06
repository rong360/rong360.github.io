## Mvcode 短信验证码

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



***由Number组件扩展，调起的整数键盘，使用方法及属性见Number组件***

### attrs下新增参数

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| counter | 倒计时时长(单位：s) | number |  | `60` |
| start  | 组件加载完倒计时是否开始    | Boolean   |  | false |
| offStartTimer  | 关闭倒计时， 可通过调用组件的startTimer方法手动启动倒计时, 如success(res){if(res.status==1){this.startTimer()}}    | Boolean   |  | false |
| action  | 发送短信验证码接口    | string   |  |  |
| params  | 发送短信验证码需携带的参数，如手机号码    | object   |  | `{}` |
| success  | 验证码接口请求成功时回调   | function(result)   |  |  |
| fail  | 验证码接口请求失败时回调   | function(result)   |  |  |
| onclickSendBtn  | 点击发送验证码    | return false 时可阻止请求短信验证码接口(可在该函数内部做某些校验，校验通过时再发送请求)。函数内部this指向当前验证码组件。 |


### 新增events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| success  | 验证码接口请求成功    | （result） result-接口返回值 |
| fail  | 验证码接口请求失败    | （result） result-接口返回值 |
| onclickSendBtn  | 点击发送验证码    | （component）component-当前验证码组件 |



### 全局组件引入
```js 
  import "rong-ui/components/rong-ui.css"
  import {rMvcode} from 'rong-ui'
  Vue.use(rMvcode);
```

or

```js
  import rMvcode from 'rong-ui/components/rMvcode'
  Vue.use(rMvcode);


组件参数继承rNumber组件，参数可查看rNumber组件。限定type=int。
attrs里新增{
  counter: 60,//倒计时时长 
  action:'/sendMvcode', //发送短信验证码接口
  params:{phone: '13234343434'} //发送短信验证码需携带的参数
}三个字段

```



#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rMVcode.png"/></div>

```bash
<rMvcode 
  :attrs="config" 
  @oninput="oninput" 
  @onclear="onclear" 
  @onconfirm="onconfirm" 
  @onclickLabelIcon="onclickLabelIcon"
  @onclickInputIcon="onclickInputIcon"  
  @success="onSuccess"
  @fail="onFail"
  :ref="config.name"
>
</rMvcode>
<rMvcode :attrs="config0" @oninput="oninput" @onclear="onclear" @success="onSuccess" @fail="onFail" :ref="config0.name"></rMvcode>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rMvcodeExp",
  data(){
    return {
      phone: "",
      count: 0,
      txt: "",
      config: {
        counter: 10,
        action: "/sendMvcode",
        params: {
          phone: '13234343434'
        },
        title: "验证码",
        //lblWidth: "5em",
        name: 'mvcode1',
        value: "",
        placeholder: "请输入短信验证码",
        disabled: false,
        readonly: false,
        showLabelIcon: true,
        maxlength: 4
      },
      config0: {
        counter: 5,
        action: "/sendMvcode",
        params: {
          phone: '13234343434'
        },
        lblWidth: "5em",
        title: "验证码2",
        name: 'mvcode2',
        value: "",
        placeholder: "请输入短信验证码",
        disabled: false,
        readonly: false
      }
    }
  },
  created(){
    var self = this;

    setTimeout(function(){
      self.config.value = 2000;
      self.config.counter = 5
    }, 2000)
  },
  methods:{
    oninput(val){
      this.num = val;console.log(val)
    },
    onclear(){
      this.$toast({
        propsData: {
          message: '数据为空了，你可以把button置灰'
        }
      })
    },
    onconfirm(code, codeStr, component){
      //this.$refs.sand.verify();
      component.verify();
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
    },
    onSuccess(result){
      this.$toast('短信验证码发送成功');
    },
    onFail(result){
      this.$toast('短信验证码发送失败');
    },
    doSubmit(){
      let pass;
      for(var key in this.$refs){
        pass = this.$refs[key].verify();
        if(!pass){
          // this.$toast(this.$refs[key].attrs.title + "输入错误~");
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