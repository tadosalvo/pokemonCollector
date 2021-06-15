import axios from 'axios'
import React, { useState, useEffect } from 'react'


// fetches data from api

const Homescreen = () => {
    const [data, setData] = useState(null)
    const [title, setTitle] = useState("List of Pokemon")
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {

        const options = {
            headers: { 'X-Api-Key': "7719d04c-b2bf-44a2-a4b3-4d73ffc661d7" }
        };

        const response = await axios.get("https://api.pokemontcg.io/v2/cards", options)
        setLoading(false)
        setData(response.data.data)
        console.log(data)
    
    }


    useEffect(() => {
        fetchData();
    }, [data])

    return (
        <div>
            {!loading ? <div>hello</div> : <div>Loading....</div>}
        </div>

    )



}

export default Homescreen