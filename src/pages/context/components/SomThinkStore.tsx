import React, { useContext } from "react";
import { StoreContext, useStoreHook } from 'think-react-store';

export default function DemoFunc(){
  const {state, dispatch} = useContext(StoreContext)
  const {user:{id, name, setName, setNameAsync}} = useStoreHook()

  const handleName = ()=>{
    setName({
      name: '同步修改'
    })
  }

  const handleNameAsync = ()=>{
    setNameAsync({
      name: '异步修改'
    })
  }

  return (
    <div>
      <h1>function 类型组件</h1>
      <p>用户：name--{name}   id--{state.user.id}</p>
      <p><button onClick={handleName}>修改用户</button></p>
      <p><button onClick={handleNameAsync}>异步修改用户</button></p>
    </div>
  )
}