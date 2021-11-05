import React from "react";
import Com from './components/Com'
import Como from './components/Como'
import ReactContext from '../../context/ReactContext'

const Context = () => {
    return (<div>
        {/* 包裹在Provider组件内的后代组件，都可以获取到这个值 */}
        <ReactContext.Provider value="重新赋值">
            <Com/><br/>
            <Como></Como>
        </ReactContext.Provider>
    </div>);
}

export default Context;