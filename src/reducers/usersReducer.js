import { GET_USERS_LIST_BEGINS, GET_USERS_LIST_FAILURE, GET_USERS_LIST_SUCCESS } from '../constants'

const INITIAL_STATE = {
    isLoading : false,
    users : {
        data : []
    }
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS_LIST_BEGINS :
            return {...state, isLoading: true}
        case GET_USERS_LIST_SUCCESS :
            return { ...state, isLoading: false, users : action.data}
        case GET_USERS_LIST_FAILURE : 
            return { ...state, isLoading: false}
        default :
            return state
    }
}

export default usersReducer