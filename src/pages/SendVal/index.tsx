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