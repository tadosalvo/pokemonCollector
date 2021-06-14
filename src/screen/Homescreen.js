import axios from 'axios'
import React,{useState , useEffect} from 'react'


const Homescreen = () => {
    console.log("hello")
    const [title,setTitle] = useState("this is my homescreen")
    const [data,setData] = useState("")

    useEffect( () => {
        axios.get('https://api.pokemontcg.io/v2/cards').then(
            response => {
                setData(response.data.name); 
            }
        )

    }, []);


    return (
        <div>
            <h1>{title}</h1>
            {data}
        </div>

        //<button onClick = {() => {data}}>GET DATA</button>
    )
}

export default Homescreen