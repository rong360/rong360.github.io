## Keyboard 数字虚拟键盘

**包含了常用的 Keyboard 数字虚拟键盘**

### 基本用法

#### 函数调用
挂载在vue.prototype上，vue实例中，直接使用this.$keyborad({options})使用。

```html

this.$keyboard({
    propsData: {
        kid: new Date().getTime(),
        //键盘类型 float、int、idcard
        type: 'int',
        //键盘默认值
        value: document.getElementById('infos').innerHTML,
        //codeStr最大长度
        maxlength: 8
    },
    methods: {
        typing(code, codeStr){
            document.getElementById('infos').innerHTML = codeStr;
        }
    }
})

```

### Attributes

keyboard实例方法通过`子类组件`覆盖基类组件的的方式实现，因此传入的对象是组件相关的一些属性：propsData、methods、computed、mounted...

#### propsData属性传入的数据如下：

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| kid | 键盘id,调起键盘的输入框通过属性[data-keyboardid=kid]与键盘进行关联 | number | | `new Date().getTime()` |
| type  | 键盘类型    | string   | `float` `int` `idcard` | `float` |
| value  | 键盘初始值    | string   |  | `''` |
| maxlength  | 键盘输入最大位数    | number   | — |  |
| fixed  | 浮点数小数位位数    | number   |  |  |

### mothods下提供的Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| typing  | 键盘点击事件    | （code,codeStr） code-键盘点击值，codeStr-当前值 |
