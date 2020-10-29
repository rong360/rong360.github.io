## Loading 加载中


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
import {Loading} from 'rong-ui2';
Vue.use(Loading)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html

var loading = this.$loading();

setTimeout(function(){
    loading.remove();
}, 2000)

```

```html
var loading = this.$loading({
	propsData: {
		text: '3s',
		textInside: true
	}
});

var count = 3;

var timer = setInterval(function(){
	count--;
	if(count == 0){
		loading.remove();
	}else{
		loading.text = count + 's';
	}
}, 1000)
```

### Attributes

loading实例方法通过`子类组件`覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

#### propsData属性传入的数据如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| text  | 加载文案    | string   |   | `false` |
| width  | loading区的长度（750px设计图下）    | number   |  | `100` |
| cwidth  | loading区圆圈的大小（750px设计图下）    | number   |  | `30` |
| textInside  | 文案位置是否在圆圈内    | boolean   |  | `false` |
| color  | loading圆圈的颜色    | string   |  | `#4080e8` |
| textColor  | 文案的颜色   | string   |  | `#ffffff` |
| textFontSize  | 文案的字体大小（750px设计图下）    | number   |  | `28` |


### 自定义loading
```js
import {Loading, Titlebar, Input} from 'rong-ui2'
Loading.config({
  loading: require('./components/LoadingCattle.vue')
})
Vue.use(Loading)
Vue.use(Titlebar)
Vue.use(Input)
```
or
```js
import rongUI2, {Loading} from 'rong-ui2'
Loading.config({
  loading: require('./components/LoadingCattle.vue')
})
Vue.use(rongUI2)
```
 
