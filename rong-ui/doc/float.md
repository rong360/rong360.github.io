## Int 整数

***由Number组件扩展，调起的带小数点的键盘，使用方法及属性见Number组件***

*** 可以通过fixed来控制小数点后可输入的位数 ***



### 全局组件引入
``` bash
安装：
  import rFloat from 'rong-ui/components/rFloat'
  Vue.use(rFloat);

  或者：
  import {rFloat} from 'rong-ui'
  Vue.use(rFloat);
```



#### 示例代码：
<div align=center><img width="200"  src="https://rong360.github.io/rong-ui/assets/images/rFloat.png"/></div>

```bash
<rFloat :attrs="config" :ref="config.name" @onclear="onclear"></rFloat>
<rFloat :attrs="config0" :ref="config0.name" @onclickInputIcon="onclickInputIcon"></rFloat>
<rFloat :attrs="config1" :ref="config1.name" @onclickLabelIcon="onclickLabelIcon"></rFloat>
<rFloat :attrs="config2" @oninput="oninput"  @onconfirm="onconfirm" :ref="config2.name"></rFloat>
<div class="btn" @click="doSubmit">提交</div>

export default{
  name: "rFloatExp",
  data(){
    return {
      num: "",
      count: 0,
      txt: "",
      config: {
        title: "天上的✨大小",
        name: 'stars',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        verify: function(val){
          if(!val){
            this.$toast("天上的星星大小？答案：天知道");
            return false;
          }
          return true;
        }
      },
      config0: {
        title: "森林里🌲的高度(小数点后三位)",
        name: 'hair',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        floatFixed: 3,
        showInputIcon: true,
        inputIconType: 'info',
        verify: function(val){
          if(val<3){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "参天大树~(大于3)"
              }
            });
            return false;
          }
          return true;
        }
      },
      config1: {
        title: "海里的🐟有多大(自定义校验大于100)",
        name: 'fish',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showLabelIcon: true,
        labelIconType: 'info',
        verify: function(val){
          if(val<100){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "🐟的大小不量！"
              }
            })
            return false;
          }
          return true;
        }
      },
      config2: {
        title: "白雪公主童话里小矮人的高度",
        name: 'sand',
        value: "",
        placeholder: "请输入",
        disabled: false,
        readonly: false,
        unit: '',
        showInputIcon: true,
        verify: function(val){
          if(!val || val > 1.5){
            this.$toast({
              propsData: {
                type: "negetive",
                message: "傻瓜，小矮人高度不超过1米5啊！！！"
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
      this.num = val;
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