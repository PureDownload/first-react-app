import { Context } from '../../../contextReducer/ReactReducer';

const Provider = (props:any) => {
    
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}
export default Provider;