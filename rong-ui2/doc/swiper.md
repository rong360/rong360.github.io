## Swipwer 按钮


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
import {Swiper} from 'rong-ui2';
Vue.use(Swiper)
```
or
```js
import RongUi2 from 'rong-ui2';
import 'rong-ui2/dist/styles/rong-ui.css'
Vue.use(RongUi2)

如果提示“rongUI2 is not defined”报错信息，请确保.babelrc文件中不能有上面按需引入的配置
```

```html
<Swiper>
  <SwiperItem @on-click="onClickSwiperItem"><img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/123209/30/16604/143626/5f9bb747Ea155ae71/aadf80788d17d8e0.jpg!q70.jpg.dpg" /></SwiperItem>
  <SwiperItem><img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/154196/24/3833/121212/5f97d34cEa985896f/e20033d24c553704.jpg!q70.jpg.dpg" /></SwiperItem>
  <SwiperItem><img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/146862/39/13822/78049/5fa7e418E6c76569b/068b19049e17de7b.jpg!q70.jpg.dpg" /></SwiperItem>
</Swiper>
```

### Swiper Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction  | 运动方向   | string   | `scrollLeft` `scrollTop` | `scrollLeft` |
| gap  | 运动间隔时长    | number   |  | `2000` |
| autoPlay  | 自动播放    | boolean   | `true` `false` | `true` |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-page  | 滚动到下一张时回调函数  |  （current, total） |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | SwiperItem  | 
| pagination  | 页码指示器    | 



### SwiperItem Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| styleObj  | SwiperItem样式   | object   |  | `{}` |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-click  | 点击SwiperItem回调函数  |  event |

### slot
| slot名称      | 说明    | 
|---------- |-------- |
| 不具名slot  | 内容    | 
