import {
    CARD_REQUEST_SUCCESS,
    CARD_REQUEST, 
    CARD_REQUEST_FAIL
} from '../constants/cardConstants'

export const cardListReducer = (state = { cards: []}, action) => {

    switch(action.type) {
        case CARD_REQUEST:
            return { loading: true, cards: [] }

        case CARD_REQUEST_SUCCESS:
            return {loading : false, cards: action.payload }

        case CARD_REQUEST_FAIL:
            return {loading:false, error: action.payload}

            default :
                return state;

    }
}