import React,{useState , useEffect} from 'react'


const Homescreen = (props) => {

    useEffect( () => {
        props.fetchData();
        console.log("done loading fetchData")
    }, []);


    return (
        // bug where it shows name in prior state then in current state rather than
        // <h1>test</h1>
        // Example: Goes from "Title" in App.js then to responseDate[1].name or "Bulbasaur"
        <div> 
            {!props.loading ? <h1>{props.name}</h1> : <h1>loading...</h1>}
        </div>

    )

}

export default Homescreen