## Icon 图标

### 基本用法

#### 组件引入

```
import {rIcon} from "rong-ui"

or

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


