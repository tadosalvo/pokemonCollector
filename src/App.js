import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React,{useState} from 'react'
import Homescreen from "./screen/Homescreen"
import AboutScreen from './screen/AboutScreen'


function App() {

  const [name, setName] = useState("Jet and Tads Project")

  const thisFunction = () => {
    console.log("hello")
  }

  return (
    <div className="App">
      <Router>
        <main >
          <Route
            exact path='/'
            render={() => (
              <Homescreen name={name} thisFunction={thisFunction} />
            )}
          />

          <Route
            exact path='/about'
            render={() => (
              <AboutScreen name={name} />
            )}
          />

        </main>
      </Router>
    </div>

  );
}

export default App;
