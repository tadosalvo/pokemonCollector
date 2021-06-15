import axios from 'axios'
import React, { useState, useEffect } from 'react'


// fetches data from api

const Homescreen = () => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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

=======
=======
>>>>>>> Stashed changes
    const [title,setTitle] = useState("this is my homescreen")
    const [data,setData] = useState([])

    const fetchData = async () => {
       
          const response = await axios.get("https://api.pokemontcg.io/v2/cards")
          const responseData = response.data.data
          setTitle(responseData[0].name)
          console.log(responseData[0].name)
<<<<<<< Updated upstream

    }

=======

    }

>>>>>>> Stashed changes
    useEffect( () => {
        fetchData();
        console.log(data)
    }, []);
>>>>>>> Stashed changes

    useEffect(() => {
        fetchData();
    }, [data])

    return (
        <div>
<<<<<<< Updated upstream
            {!loading ? <div>hello</div> : <div>Loading....</div>}
=======
            <h1>{title}</h1>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </div>

    )



}

export default Homescreen