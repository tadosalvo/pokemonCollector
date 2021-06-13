import React,{useState} from 'react'

const Homescreen = () => {
    console.log("hello")
    const [title,setTitle] = useState("this is my homescreen")
    const [data,setData] = useState([])
    






    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Homescreen