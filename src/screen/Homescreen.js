import axios from 'axios'
import React,{useState , useEffect} from 'react'


const Homescreen = () => {

    const [title,setTitle] = useState("this is my homescreen")
    const [data,setData] = useState([])

    const fetchData = async () => {
       
          const response = await axios.get("https://api.pokemontcg.io/v2/cards")
          const responseData = response.data.data
          setTitle(responseData[0].name)
          console.log(responseData[0].name)

    }

    useEffect( () => {
        fetchData();
        console.log(data)
    }, []);


    return (
        <div>
            <h1>{title}</h1>
        </div>

    )

}

export default Homescreen