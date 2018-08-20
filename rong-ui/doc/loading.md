## Loading 加载中

**常用的加载**

### 基本用法

#### 函数调用
挂载在vue.prototype上，vue实例中，直接使用this.$loading({options})使用。

```js
import {Loading} from "rong-ui"

or

import Loading from "rong-ui/components/loading"

Vue.use(Loading)
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
 
