### 简介
如果说redux是react的全局存储的话,那么Context更像是组件树存储。即放在组件树顶端的数据，在组件树下方的所有组件均可获取，修改
### 学习方向
1. 如何查看(useContext)
- 跨组件通信需要将Context对象保存到一个单独的js文件
Context.js
```js
import React from "react"
const ReactContext = React.createContext("初始化数据")//* 创建一个初始化数据，可以为Array，Object

export default ReactContext;
```
父组件
```js
import React from "react";
import Com from './components/Com'
import ReactContext from '../../context/ReactContext'

const Context = () => {
    return (<div>
        {/* 包裹在Provider组件内的后代组件，都可以获取到这个值 */}
        <ReactContext.Provider value="重新赋值">
            <Com/>
        </ReactContext.Provider>
    </div>);
}

export default Context;
```
子组件
```js
import { useContext } from "react";
import ReactContext from '../../../context/ReactContext'


const Com = () => {
    const data = useContext(ReactContext) //* 通过保存的ReactContext获取他的值

    return (<div>
        {data}
    </div>)
}

export default Com;
```

2. 如何修改(useReducers)
- 官方示例
```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, {count: initialCount});
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

- 使用useReducer写一个简易版Redux
实现思路:\
1. 通用Context封装state，action方法和返回Context对象
2. 封装一个Provider组件，用于放置store对象
3. index.tsx引入Provider组件，使用useReducer生成state和dispatch对象。丢入Provider组件中，放入Context组件
4. 子组件通过获取Context对象获取state显示和dispatch方法修改state值
重点，总结：
- 使用useProvider生成state和dispatch对象，可用于显示和修改
- 将生成的对象丢入Context对象，可用于全局获取
Context.js
```js
import React from "react";
export const store = {name:'初始化数据'}
export const Context = React.createContext(store) //* 创建一个context */

//* action
export const reducer = (state, action) => {
    switch (action.type) {
        case 'change':
            return {name:"修改了数据"}
        default:
            return {name:"默认数据"};
    }
}
```
Provider组件
```js
import { Context } from '../../../contextReducer/ReactReducer';

const Provider = (props:any) => {
    
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}
export default Provider;
```
index.js
```js
import Provider from './Provider'
import SomCom from './SomCom'
import {useReducer} from 'react'
import {reducer,store} from '../../../contextReducer/ReactReducer.js'
const Como = () => {
    const storeData:any = store
    const [state,dispatch] = useReducer(reducer,storeData);

    return (<div>
        <Provider store={{state,dispatch}}>
            <SomCom></SomCom>
        </Provider>
    </div>)
}
export default Como;
```
子组件 用于显示和修改数据
```js
import React from "react"
import { Context } from "../../../contextReducer/ReactReducer"
const SomCom = () => {
    const sotreContext:any = Context
    const { state,dispatch } = React.useContext(sotreContext)
    console.log(state,dispatch);
    
    return (<div>
        显示的内容:{state.name}
        <button onClick={() =>{ dispatch('change') }}>修改内容</button>
    </div>)
}
export default SomCom
```

#### 参考链接
https://www.jianshu.com/p/6127d4b1e3ce