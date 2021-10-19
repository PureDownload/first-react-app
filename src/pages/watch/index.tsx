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