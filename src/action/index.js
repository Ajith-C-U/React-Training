import { GET } from "../constants"

const getSuccess = (data) => ({type : GET, data})


export const actionGetPassengersList = () => (dispatch) => { 
    return dispatch(getSuccess())
}