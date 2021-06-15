import axios from 'axios'
import React,{useState , useEffect} from 'react'


const Homescreen = (props) => {

    const [title,setTitle] = useState("this is my homescreen")
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const options = {
            headers: {'X-Api-Key' : "7719d04c-b2bf-44a2-a4b3-4d73ffc661d7" }
        }

          const response = await axios.get("https://api.pokemontcg.io/v2/cards", options)
          const responseData = response.data.data
          setTitle(responseData[0].name)
          setData(responseData)
          setLoading(false) 

    }

    useEffect( () => {
        fetchData();
        console.log(data, "this is data")
        props.thisFunction();
    }, []);


    return (
        <div>
            {!loading ?<h1>{title}</h1> : <h1>{props.name}</h1>}
        </div>

    )

}

export default Homescreen