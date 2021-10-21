import { useContext } from "react";
import ReactContext from '../../../context/ReactContext'


const Com = () => {
    const data = useContext(ReactContext) //* 通过保存的ReactContext获取他的值

    return (<div>
        {data}
    </div>)
}

export default Com;