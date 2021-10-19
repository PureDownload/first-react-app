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