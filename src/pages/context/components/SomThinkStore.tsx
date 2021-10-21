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
————————————————
版权声明：本文为CSDN博主「梧桐月」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/iekou/article/details/105422856