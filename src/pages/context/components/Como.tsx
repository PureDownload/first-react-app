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