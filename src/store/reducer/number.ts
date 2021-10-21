import { ADD_NUMBER, REDUCE_NUMBER } from '../listActionTypes'
const number = {
    count: 0
}
const action = (state:any = number,action:any) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {...state,count : action.value+1}
        case REDUCE_NUMBER:
            return {...state,count : action.value-1}
        default:
            return state
    }
}
export default action;