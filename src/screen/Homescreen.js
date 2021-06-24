import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getCards} from '../actions/cardActions'



const Homescreen = (props) => {

    const dispatch = useDispatch();
    const cardList = useSelector((state) => {
        return state.cardList
    })

    const {loading, cards, error} = cardList

    useEffect(() => {
        dispatch(getCards())
    }, [dispatch]);


    return (

        <div> 
            {!loading && cards.length !== 0 ? <h1>{cards.data[0].name}</h1> : <h1>loading...</h1>}
        </div>

    )

}

export default Homescreen