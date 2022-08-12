import { combineReducers } from "redux";
import authReducer from "./authReducer"
import usersReducer from "./usersReducer";

const appReducers = combineReducers({
    authReducer,
    users : usersReducer,
})
export default appReducers;