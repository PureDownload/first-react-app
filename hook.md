### React自定义Hooks学习
##### 如果是Vue转React或者是刚入门React的。可以先看看之前的文章
1. [react Hook入门，和vue的对比](https://juejin.cn/post/7020751816249835528)
2. [React，Hook使用，规范使用](https://juejin.cn/post/7021065668199972871)
3. [react hook 使用Context](https://juejin.cn/post/7021125227186749476)
##### 简介
React Hooks是React16.8之后的新特性，React之后的函数式编程就是依赖于Hooks来实现的。 \
示例
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
在这段代码中使用了useState和useEffect两个Hook实现了计数器的功能，如果有使用过class的话会发现使用Hook后可以看到代码相比于class会更加的简洁。下面我们会来介绍他们的功能。
#### 官方Hooks
##### 1. useState: 用于创建一个变量
这可能是最常用的一个API了，它用于创建一个和页面响应的变量，可以在页面中直接使用。如果直接创建变量的话当变量修改页面不会响应。 \
语法
```js
import { useState } from 'react'
const [state, setState] = useState(init)
```
useState方法内传入一个初始化的值，返回一个状态和set方法。要修改state的状态只能通过set方法进行修改
##### 2. useEffect： 可用于当做生命周期使用（componentDidMount, componentDidUpdate, componentWillUnmount）
```js
useEffect(() => { //* 数据更改时触发 可相当于mounted 在第一次渲染和每次更新之后会执行
        console.log(count)
    })
```
##### 3. useContext,useReducer 可用于做组件树的全局存储
[react hook 使用Context](https://juejin.cn/post/7021125227186749476)
##### 4. useMemo 接收一个函数和一个依赖项数组，当依赖项数组修改时会更新。可当做计算属性使用
```js
import { useState,useMemo } from "react";

const Computed = () => {
    //* 声明两个state 用于相加
    const [count,setCount] = useState(1)
    const [count1,setCount1] = useState(1)

    //* 声明一个计算属性 值为两个count相加 第二个参数为监听的属性，传入[count,count1],当两个的值被修改会调用，类似api useCallback
    const total = useMemo(() => {
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
##### 5. useCallback 和useMemo，可用于预防state过多时导致函数重复渲染
```js
const callback = useCallback(
  () => {
    
  },
  [a, b],
);
```
只有当a，b修改时才会产生新的函数 todo 需要重新测试

##### 6. useRef 返回一个ref对象，放置到元素中可用于获取dom操作 todo
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
##### 7. useImperativeHandle 自定义暴露给父组件的方法和属性 配合ref使用
父组件
```js
import Input from './components/Input'
import {useRef, useCallback} from 'react'
const Hooks = () => {
    const inputRef:any = useRef({val:''}) //* 创建一个ref对象

    const handleClearInput = useCallback(() => { //* 调用子组件的clear方法
        inputRef.current.clear();
      }, []);
      const getRef = () => {
          console.log(inputRef);
          
      }
    return (<div>
        <Input ref={inputRef}></Input>
        <button onClick={handleClearInput}>clear input</button>
        <button onClick={getRef}>获取ref</button>
    </div>)
}

export default Hooks
```
子组件
```js
import { useState, useImperativeHandle, useCallback, forwardRef } from 'react'

const Input = (props:any, ref:any) => {
    console.log(props);
    
    const [val, setVal] = useState('0')
    const clearInput = useCallback(() => { //* 清空input
        setVal('')
    }, [])

    useImperativeHandle(ref, () => ({ //* 使用该api，可以自定义暴露给父组件的方法和属性
        val: val,
        clear: () => {
            clearInput()
        }
    }))

    return (<input type="text" value={val} onChange={(e) => setVal(e.target.value)} />);
}

export default forwardRef(Input) //* 封装ref hook需要使用
```


##### 参考链接
1. 掘金文章: [15 个很有用的自定义 React Hooks](https://juejin.cn/post/6844904190469210125)