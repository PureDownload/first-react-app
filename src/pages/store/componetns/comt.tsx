import {useSelector,useDispatch, RootStateOrAny} from 'react-redux'

const Comt = () => {
    const count = useSelector((state:RootStateOrAny) => {
        return state.count;
    } )
    const dispatch = useDispatch();
     //方法调用后自动更新数据
    const increment = ()=>{
        dispatch({type: 'addCount', value:count})
    }
    const decrement = ()=>{
        dispatch({type: 'reduceCount', value:count})
    }
    return (<div>
        ComO {count}
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>)
}
export default Comt;