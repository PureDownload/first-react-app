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