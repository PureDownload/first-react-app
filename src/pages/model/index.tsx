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