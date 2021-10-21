import { ADD_COUNT, REDUCE_COUNT } from '../listActionTypes'

export const getAddCount = (value) => {
    return {
        type: ADD_COUNT,
        value
    }
}

export const getReduceCount = (value) => {
    return {
        type: REDUCE_COUNT,
        value
    }
}