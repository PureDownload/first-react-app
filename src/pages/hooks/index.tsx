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