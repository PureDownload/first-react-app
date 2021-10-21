# Redux
##### todo @cpage/react-store学习 redux-alita todo 16.x推荐 hook + context.js
### 简介
类似于vuex，用于实现跨组件通信。
### 路线
1. 如何安装，需要的依赖包
2. 如何使用
3. 如何规范使用，分为哪几个模块

#### 如何安装，需要的依赖包
```cmd
npm install react-redux --save
npm isntall redux --save
npm install redux-thunk
```
#### 如何使用
1. 创建src/store文件夹。类似于vuex中的文件夹目录，并创建index。index用于创建一个新的仓库
```js
import { createStore, compose } from 'redux'
//* 处理redux的异步任务的中间件
// import thunk from 'redux-thunk'
import count from './reducer/count.ts'

const store = createStore(count, compose(
    // applyMiddleware(thunk),
    (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
```
2. 创建src/store/reducer/count.ts 这是action文件 action文件中存在state和action
```js
const number = {
    count: 0
}
const action = (state:any = number,action:any) => {
    switch (action.type) {
        case 'addCount':
            return {...state,count : action.count+1}
        case 'reduceCount':
            return {...state,count : action.count-1}
        default:
            return state
    }
}
export default action;
```
3. App.js
```js
import './App.css';
import Router from './router/index' //* 使用路由组件
//* 使用redux
import store from './store'//* 引入刚刚创建的store文件
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store} className="App">
      <Router />
    </Provider>
  );
}

export default App;
```
- 上面几步为编写store代码和引入store，下面为组件使用
4. 组件使用
index.js
```js
import Como from './componetns/como'
import Comt from './componetns/comt'
const Store = () => {
    return (<div>
        <Como/>
        <Comt/>
    </div>)
}
export default Store
```
Como
```js
import {useSelector,useDispatch, RootStateOrAny} from 'react-redux'

const Como = () => {
    const count = useSelector((state:RootStateOrAny) => {
        console.log(state);  
        return state.count
    } )
    const dispatch = useDispatch();
     //方法调用后自动更新数据
    const increment = ()=>{
        dispatch({type: 'addCount', count})
    }
    const decrement = ()=>{
        dispatch({type: 'reduceCount', count})
    }
    return (<div>
        ComO {count}
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>)
}
export default Como;
```
Comt组件和上面相同 测试在不同组件下数据是否相同
#### 规范使用
思路 \
dispatch中需要type，需要抽出来复用
1. 增加dispatch-type的复用 创建store/listActionTypes
```js
export const ADD_COUNT = 'addCount'
export const REDUCE_COUNT = 'reduceCount'
export const ADD_NUMBER = 'addNumber'
export const REDUCE_NUMBER = 'reduceNumber'
```
2. 将action和组件中使用复用出来 创建store/action/count
```js
import { ADD_COUNT, REDUCE_COUNT } from '../listActionTypes'
const count = {
    count: 0
}
const action = (state:any = count,action:any) => {
    switch (action.type) {
        case ADD_COUNT:
            return {...state,count : action.value+1}
        case REDUCE_COUNT:
            return {...state,count : action.value-1}
        default:
            return state
    }
}
export default action;
```
3. action使用 store/reducer/count
```js
import { ADD_COUNT, REDUCE_COUNT } from '../listActionTypes'
const count = {
    count: 0
}
const action = (state:any = count,action:any) => {
    switch (action.type) {
        case ADD_COUNT:
            return {...state,count : action.value+1}
        case REDUCE_COUNT:
            return {...state,count : action.value-1}
        default:
            return state
    }
}
export default action;
```
4. 页面中的使用
Como
```js
import {useSelector,useDispatch, RootStateOrAny} from 'react-redux'
import { getAddCount, getReduceCount } from '../../../store/action/count'

const Como = () => {
    const count = useSelector((state:RootStateOrAny) => {
        console.log(state);  
        return state.count
    } )
    const dispatch = useDispatch();
     //方法调用后自动更新数据
    const increment = ()=>{
        dispatch(getAddCount(count))
    }
    const decrement = ()=>{
        dispatch(getReduceCount(count))
    }
    return (<div>
        ComO {count}
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>)
}
export default Como;
```