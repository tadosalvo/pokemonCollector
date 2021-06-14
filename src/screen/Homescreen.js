import axios from 'axios'
import React,{useState , useEffect} from 'react'


const Homescreen = () => {
    console.log("hello")
    const [title,setTitle] = useState("this is my homescreen")
    const [data,setData] = useState([])

    useEffect( () => {
        axios.get('https://api.pokemontcg.io/v2/cards'/*, {'X-Api-Key' : 111}*/).then(
            response => {
                setData(response.data.data); 
            }
        )

    }, []);

    return data.map((i) =>{
        return ( 
        <div>
            <li>{i.name}</li>
        </div>
        )
     });
     
}

export default Homescreen