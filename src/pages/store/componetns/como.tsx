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