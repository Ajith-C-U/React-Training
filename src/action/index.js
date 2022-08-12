import axios from "axios"
import { GET_USERS_LIST_BEGINS, GET_USERS_LIST_FAILURE, GET_USERS_LIST_SUCCESS } from "../constants"

const getUsersListBegins = () => ({type : GET_USERS_LIST_BEGINS})
const getUsersListSuccess = (data) => ({type : GET_USERS_LIST_SUCCESS, data})
const getUsersListFailure = () => ({type : GET_USERS_LIST_FAILURE})


export const actionGetUsersList = () => async (dispatch) => { 
    dispatch(getUsersListBegins())
    try {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const response = res.data
            dispatch(getUsersListSuccess(response))
        })
    }catch (error){
        dispatch(getUsersListFailure())
    }
}