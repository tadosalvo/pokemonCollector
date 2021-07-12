import React, {useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';


const Homescreen = (props) => {

    const [text, setText] = useState("")
    const [cardState, setCardState] = useState([])

    const dispatch = useDispatch();
    const cardList = useSelector((state) => {
        return state.cardList
    })

    const { loading, cards, error } = cardList
    const { data } = cards;

    return (
        <div>
            <SearchBar
                text={text}
                setText={setText}
                cardState={cardState}
                setCardState={setCardState}
                loading={loading}
                cards={cards}
                error={error}
                data={data}
                dispatch={dispatch}

            />

            {loading ? <h1>loading..</h1> : error ? <h1>error...</h1> : data.map(function(item, index) {
                if (index == 0){
                    return <h1 key="{item}">{item.name}</h1>
                    }
            })}
 
        </div>


    )

}

export default Homescreen