import {cardListReducer} from './reducers/cardReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk';

// REDUCERS
const allReducers = combineReducers({
    cardList: cardListReducer
})

const initialState = {
    cardList : {cards: {data: []}}
}

const middleware = [thunk]
const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;