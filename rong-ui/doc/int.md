## Int 整数

***由Number组件扩展，调起的整数键盘，使用方法及属性见Number组件***





### 全局组件引入
``` bash
安装：
  import rInt from 'rong-ui/components/rInt'
  Vue.use(rInt);

  或者：
  import {rInt} from 'rong-ui'
  Vue.use(rInt);
```



#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rInt.png"/></div>

```bash
<rInt :attrs="config" :ref="config.name" @onclear="onclear"></rInt>
<rInt :attrs="config0" :ref="config0.name" @onclickInputIcon="onclickInputIcon"></rInt>
<rInt :attrs="config1" :ref="config1.name" @onclickLabelIcon="onclickLabelIcon"></rInt>
<rInt :attrs="config2" @oninput="oninput"  @onconfirm="onconfirm" :ref="config2.name"></rInt>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rIntExp",
  data(){
    return {
      num: "",
      count: 0,
      txt: "",
      config: {
        title: "天上的✨有几颗(默认非空校验)",
        name: 'stars',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true
      },
      config0: {
        title: "森林里有多少棵🌲(无需校验)",
        name: 'hair',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        inputIconType: 'info',
        needVerify: false
      },
      config1: {
        title: "海里的🐟有几种(自定义校验规则)",
        name: 'fish',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showLabelIcon: true,
        labelIconType: 'info',
        verify: function(val){
          if(val<1000){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "🐟的种类不可胜举,至少1000种！"
              }
            })
            return false;
          }
          return true;
        }
      },
      config2: {
        title: "白雪和几个小矮人(点键盘确认时触发校验)",
        name: 'sand',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        verify: function(val){
          if(val != 7){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "傻瓜，小矮人是七个啊！！！"
              }
            });
            return false;
          }
          return true;
        }
      }
    }
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