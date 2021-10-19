# 学习
## 本文使用React Hook编程(和vue的对比)
### 主要内容
参考vue，有几方面需要学习的地方。
1. data的声明。vue直接在模板对象中使用data属性即可。react使用useState声明属性
2. 生命周期的使用。vue模板将生命周期作为属性调用，方便明了。react在函数中声明方法
3. 父子传值的区别
4. 插槽实现
5. css污染 （styled-components|.module.css）
6. ref
7. 计算属性
8. 监听

#### data的声明，父子组件传值
* 实现思路: 父组件创建一个state值，传递给子组件。子组件通过事件传播修改父组件的值 *
父组件代码
```js
import Som from './components/som'
import { useState } from 'react';

const SendVal = () => {
    //* 使用useState初始化一个状态，结构出来的第一个为状态，第二个值为set方法
    const [ text, setText] = useState('父组件的值')

    //* 创建一个方法，用于修改state的值
    const setValText = (text: string) => {
        setText(text)
    }

    return (
        <div>父组件text: {text}
            {/* 调用子组件，将值和方法传递给子组件。实现父子组件emit和传值的效果 */}
            <Som setValText={setValText} text={text}></Som>
        </div>
    )
}

export default SendVal;
```
子组件代码
```js
interface IProps { //* 定义props类型 1.为了方便观看 2.防止出现不能将类型“xxx”分配给类型“IntrinsicAttributes”。 类型“IntrinsicAttributes”上不存在属性“xxx”。错误
    setValText: Function;
    text: string;
}
// 第一个参数为props，组件传的值都可以从props中获取
const Som = (props: IProps) => {
    // 获取到父组件传的值
    const { text, setValText } = props;

    const updateFatherVal = () => {
        setValText('aa')
    }
    return (
        // 使用父组件传值
        <div>子组件收到的text：{text}
            <button onClick={updateFatherVal}>修改</button>
        </div>
    )
}

export default Som;
```
总结和vue的区别:
    1. data的声明不同 vue直接在模板对象中使用data属性即可。react使用useState声明属性
    2. 事件传播方式不同，vue相当于封装好了，只需要在子组件使用emit方法传播事件。而react是将方法直接丢到子组件中，让子组件调用父组件的值
#### 单向绑定
- 测试思路:创建一个普通变量和一个state -》测试直接修改和使用set方法修改
- 期待结果: 页面是否刷新，变量是否修改
- 结果：直接修改均不会刷新，变量会修改。
- 意料之外的结果：使用set方法修改state时，普通变量的值会被重置为初始化的值。可通过打印查看，猜测会使用页面value的值，需再次认证 todo
```js
import { useState } from "react";

const Model = () => {
    let inputValue = "这是初始化的值" //* 创建一个不是state的值
    let [inputState, setInputState] = useState("初始化state")

    //* 测试内容 直接修改，使用set方法修改 期望结果：页面是否刷新

    const directUpdateValue = () => { //* 页面不会刷新，值会刷新
        inputValue = "直接修改value"
    }
    const directUpdateState = () => { //* 页面不会刷新，值会刷新
        inputState = "直接修改state"
    }
    const updateState = () => { //* 页面会刷新，值会刷新 */
        setInputState("使用set方法修改")
    }
    const print = () => {//* 打印结果
        console.log(inputValue,inputState)
    }
    const updateInputValue = (event:any) => { //* 双向绑定
        setInputState(event.target.value)
    }
    //* inputValue刷新后的值，当state使用set方法改变后，会重置
    return (<div>
        <input value={inputValue} placeholder="inputValue" />
        <input value={inputState} onChange={updateInputValue} placeholder="inputState" />
        <button onClick={directUpdateValue}>直接修改value</button>
        <button onClick={directUpdateState}>直接修改state</button>
        <button onClick={updateState}>使用set方法修改</button>
        <button onClick={print}>打印结果</button>
    </div>)
}

export default Model;
```
#### slots 实现
- 实现思路: 直接传值html片段 渲染即可
父组件
```js
import { useState } from "react";
import Com from './components/Com'

const Slots = () => {
    const [text,setText] = useState("初始化内容")
    const updateTestData = () => {
        setText('修改值')
    }
    //* 可以使用父组件方法
    const defaultSlot = (
        <div>{text}
            <button onClick={updateTestData}>修改值</button>
        </div>
    )
    return (<div>
        父组件
        <Com defaultSlot={defaultSlot}></Com>
    </div>);
}

export default Slots;
```
子组件
```js
interface IProps {
    defaultSlot: object;
}

const Com = (props: IProps) => {
    //* 获取插槽内容
    const { defaultSlot } = props;
    return (<div>
        下面是插槽内容:
        <div>{defaultSlot}</div>
    </div>);
}

export default Com;
```
#### 样式污染
1. 样式文件名称增加module
样式污染即组件引入的样式会影响到全局
父组件
```js
import Com from './components/com'
import Como from './components/como'
const Style = () => {
    return (
        <div>
            <Com></Com>
            <Como></Como>
        </div>
    )
}
export default Style
```
子组件1
```js
import '../../../style/test.css'
const Style = () => {
    return (
        <div className="red">aaaaa</div>
    )
}
export default Style
```
子组件2
```js
const Style = () => {
    return (
        <div className="red">aaaaa</div>
    )
}
export default Style
```
子组件2没有引入css文件 字体颜色也会变成红色
- 修改后:
子组件1
```js
import style from '../../../style/test.module.css'
const Style = () => {
    return (
        <div className={style.red}>aaaaa</div>
    )
}
export default Style
```
子组件2
```js
const Style = () => {
    return (
        <div className="red">aaaaa</div>
    )
}
export default Style
```

#### ref
父组件
```js
import React from "react";
import Com from './components/com';

const Ref = () => {
    const myRef = React.createRef();
    const getRef = () => {
        console.log(myRef,'ref');
        
    }
    return (<div>
        <Com ref={myRef} text="内容" />
        <button onClick={getRef}>获取ref</button>
    </div>)
}
export default Ref;
```
class写法 todo 以后再试

hook写法
获取方式
1. i18next
2. forwardRef
总结 失败，todo
```js
import React, {useRef} from "react";
import Com from './components/com';

const Ref = () => {
    const myRef = useRef();
    const getRef = () => {
        console.log(myRef,'ref');
        
    }
    return (<div>
        <Com ref={myRef} text="内容" />
        <button onClick={getRef}>获取ref</button>
    </div>)
}
export default Ref;
```
```js
import React from "react"
// import {withTranslation} from 'react-i18next'
const Com = (props: any,ref:any) => {
    
    return (
        <div>子组件</div>
    )
}
// export default Com //* hook函数创建的组件没有ref
// export default withTranslation('translation', { withRef: true })(Com) //* react-i18next 需要安装，todo 还未测试
export default React.forwardRef(Com) //* 获取失败
```
#### 计算属性
hook可以使用useMemo简单实现计算属性的功能
```js
import { useState,useMemo } from "react";

const Computed = () => {
    //* 声明两个state 用于相加
    const [count,setCount] = useState(1)
    const [count1,setCount1] = useState(1)

    //* 声明一个计算属性 值为两个count相加 第二个参数为监听的属性，传入[count,count1],当两个的值被修改会调用，类似api useCallback
    const total = useMemo(() => { //* 可以返回一个函数 这个函数不会被更新 而是会被缓存起来
        return count + count1
    },[count,count1])

    const addCount = () => {
        setCount(count + 1)
    }
    const addCount1 = () => {
        setCount1(count1 + 1)
    }
    
    return (<div>
        {count} - {count1} - {total}
        <button onClick={addCount}>count++</button>
        <button onClick={addCount1}>count1++</button>
    </div>)
}
export default Computed
```
- 将useMemo当成缓存函数的方法 他不仅仅可以当做计算属性使用
> https://www.cnblogs.com/qianxiaox/p/14020903.html


#### 监听
- 使用了useEffect 该方法可当mounted事件使用，也可以当成updated。在首次挂载和每次渲染之后会执行
```js
import { useState, useEffect } from 'react'
const Watch = () => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const updateCount = () => {
        setCount(count + 1)
    }
    const updateCount1 = () => {
        setCount1(count1 + 1)
    }

    useEffect(() => { //* 数据更改时触发 可相当于mounted 在第一次渲染和每次更新之后会执行
        console.log(count)
    })
    return (
        <div>
            {count} - {count1}
            <button onClick={updateCount}>count++</button>
            <button onClick={updateCount1}>count1++</button>
        </div>
    )
}

export default Watch
```
#### 报错信息
> React Hook “useState“ is called in function “xxx“ which is neither a React function component or
这是因为react的组件名首字母必须为大写