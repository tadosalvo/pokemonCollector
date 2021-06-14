import axios from 'axios'
import React,{useState , useEffect} from 'react'


const Homescreen = () => {
    const [title] = useState("List of Pokemon")
    const [data,setData] = useState([])

    useEffect( () => {
        axios.get('https://api.pokemontcg.io/v2/cards'/*, {'X-Api-Key' : 111}*/).then(
            response => {
                setData(response.data.data); 
            }
        )

    }, []);

    const items = data.map((i) => {
        return (<li>{i.name}</li>)
    });

    return (
        <div>
        <h1>{title}</h1>
        {items}
        </div>

    )

}

export default Homescreen