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