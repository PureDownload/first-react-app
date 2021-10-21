import { ADD_NUMBER, REDUCE_NUMBER } from '../listActionTypes'

export const getAddNumber = (value) => {
    return {
        type: ADD_NUMBER,
        value
    }
}

export const getReduceNumber = (value) => {
    return {
        type: REDUCE_NUMBER,
        value
    }
}