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