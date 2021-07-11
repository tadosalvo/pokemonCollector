import{
    CARD_REQUEST_SUCCESS,
    CARD_REQUEST, 
    CARD_REQUEST_FAIL
} from '../constants/cardConstants'
import axios from 'axios'


export const getCards = (userSearchInput) => async (dispatch) => {

    if (userSearchInput.length === 0) {
        userSearchInput = "zzz"
    }

    try {
        dispatch({type: CARD_REQUEST})

        const options = {
            headers: {'X-Api-Key' : "7719d04c-b2bf-44a2-a4b3-4d73ffc661d7" }
        }

        const {data} = await axios.get("https://api.pokemontcg.io/v2/cards?q=name:" + userSearchInput + "*", options)

        dispatch({
            type: CARD_REQUEST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CARD_REQUEST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message: error.message
        })
        
    }
}
