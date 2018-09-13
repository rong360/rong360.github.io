## Hidden 隐藏域

#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



### 基本用法

#### 全局组件引入


```js
import "rong-ui/components/rong-ui.css"
import {rHidden} from "rong-ui"
Vue.use(rHidden)
```

or

```js
import rHidden from "rong-ui/components/rHidden"

Vue.use(rHidden)
```
```html
<rHidden 
    :attrs="item.config" 
    :ref="item.config.name" 
>
</rHidden>
```

### Attributes

### Input组件的配置通过attrs传入，attrs下各参数说明过如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 表单label | string |  |  |
| name  | 表单name    | string   |  |  |
| value | 默认值 | string | | |



### methods
| 名称      | 说明    | 参数      | 返回值 |
|---------- |-------- |---------- |---------- |
| getSerialize | 获取当前组件表单数据 | | key=value |
| getSerializeArray | 获取当前组件表单数据 | | {key: value} |




#### 示例代码：


```bash
<rHidden 
    :attrs="config" 
    :ref="config.name" 
>
</rHidden>

export default{
  name: "rHiddenExp",
  data(){
    return {
      config: {
        title: "经纬度信息",
        name: 'geolocation',
        value: "",
      }
    }
  },
  methods: {
    doSubmit(){
      let s = [],
          sa = {};
        for(var key in this.$refs){
          s.push(this.$refs[key][0].getSerialize());
          Object.assign(sa,this.$refs[key][0].getSerializeArray());
        }
        this.$dialog({
          propsData: {
            message:" 序列化数据为："+s.join("&")
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
```

