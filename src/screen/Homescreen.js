import React,{useState , useEffect} from 'react'


const Homescreen = (props) => {

    useEffect( () => {
        props.fetchData();
        console.log("done loading fetchData")
    }, []);


    return (

        <div> 
            {!props.loading ? <h1>{props.name}</h1> : <h1>loading...</h1>}
        </div>

    )

}

export default Homescreen