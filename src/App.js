import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import Homescreen from "./screen/Homescreen"
import AboutScreen from './screen/AboutScreen'
import ButtonAppBar from './components/appBar';
import SignUp from './screen/SignUpScreen'
import LogIn from './screen/LoginScreen'

function App() {

  

  return (
    <div className="App">
   
      <Router>
        <main >
            <ButtonAppBar/>         
            <Route exact path="/" component={Homescreen} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LogIn" component={SignUp} />

        </main>
      </Router>
    </div>

  );
}

export default App;