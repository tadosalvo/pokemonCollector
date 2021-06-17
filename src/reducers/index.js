import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from "redux";

// REDUCERS
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers;