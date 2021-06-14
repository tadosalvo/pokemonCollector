import axios from 'axios'
import React,{useState , useEffect} from 'react'

//const [title] = useState("List of Pokemon")
//const [data,setData] = useState([])


// test api if pokemon is not working
//https://www.boredapi.com/api/activity

// fetches data from api
const fetchData = () => {
    return axios.get('https://api.pokemontcg.io/v2/cards', {
        headers: {'X-Api-Key' : process.env.REACT_APP_API_KEY}})
    .then( (res) => {
        //const {response} = res;
        console.log(res.data);
        //return response;
    })
    .catch((err) => {
        console.error(err);
    })
}


const Homescreen = () => {
    const [data,setData] = useState([])


    useEffect(() => {
        fetchData();
    }, [])

return (
    <div>
        <h1>Hello</h1>
    </div>

)




    /*
    useEffect( () => {
        axios.get('https://api.pokemontcg.io/v2/cards', {'X-Api-Key' : 111}).then(
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
    */
    

}

export default Homescreen