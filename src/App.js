import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React,{useState} from 'react'
import Homescreen from "./screen/Homescreen"
import AboutScreen from './screen/AboutScreen'
import axios from 'axios'


function App() {

  const [about, setAbout] = useState("About Page")
  const [title,setTitle] = useState("Title")
  const [name, setName] = useState("Pokemon Name")
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [displayLoading, setDisplayLoading] = useState("Loading...")

  const fetchData = async () => {
    setLoading(true)
    const options = {
        headers: {'X-Api-Key' : "7719d04c-b2bf-44a2-a4b3-4d73ffc661d7" }
    }
      console.log("loading..")
      const response = await axios.get("https://api.pokemontcg.io/v2/cards", options)
      console.log("done")
      const responseData = response.data.data
      setName(responseData[1].name)
      setData(responseData)
      setLoading(false) 

}

  return (
    <div className="App">
      <Router>
        <main >
          <Route
            exact path='/'
            render={() => (
              <Homescreen loading={loading} name={name} fetchData={fetchData} />
            )}
          />

          <Route
            exact path='/about'
            render={() => (
              <AboutScreen about={about} />
            )}
          />

        </main>
      </Router>
    </div>

  );
}

export default App;
