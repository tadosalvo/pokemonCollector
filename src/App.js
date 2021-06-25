import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import Homescreen from "./screen/Homescreen"
import AboutScreen from './screen/AboutScreen'
import ButtonAppBar from './components/appBar';

function App() {

  

  return (
    <div className="App">
   
      <Router>
        <main >
            <ButtonAppBar/>         
            <Route exact path="/" component={Homescreen} />
        </main>
      </Router>
    </div>

  );
}

export default App;
