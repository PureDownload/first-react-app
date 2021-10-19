import React, {useRef} from "react";
import Com from './components/com';

const Ref = () => {
    const myRef = useRef();
    const getRef = () => {
        console.log(myRef,'ref');
        
    }
    return (<div>
        <Com ref={myRef} text="内容" />
        <button onClick={getRef}>获取ref</button>
    </div>)
}
export default Ref;