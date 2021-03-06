## Icon 图标


#### 链接

[点击链接查看示例](https://rong360.github.io/rong-ui/demo/index.html#/) 

#### 扫描二维码体验

![Alt text](https://static.rong360.com/upload/png/a2/70/a27057593a1271f2e877d382d6718fed.png)



### 基本用法

#### 组件引入

``` js
import "rong-ui/components/rong-ui.css"
import {rIcon} from "rong-ui"
Vue.use(rIcon)
```

or

``` js
import rIcon from "rong-ui/components/rIcon"

Vue.use(rIcon)
```
```
<rIcon type="arrow-left" color="#4080e8"></rIcon>

```
#### 图标类型

![Alt text](https://rong360.github.io/rong-ui/assets/images/icons.png)

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 图标类型   | string   | 见上图 |  |
| size  | 图标大小，如”12px“,"0.8rem"    | string   |  |  |
| color  | 图标字体颜色    | string   |  |  |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| iconClick  | 点击icon触发的回调函数  |  event |


