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