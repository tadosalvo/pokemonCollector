import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import Homescreen from "./screen/Homescreen"
import AboutScreen from './screen/AboutScreen'
import ButtonAppBar from './components/appBar';
import SignUp from './screen/SignUpScreen'
import LogIn from './screen/LoginScreen'
import CardComponent from './components/CardComponent';

function App() {

  

  return (
    <div className="App">
   
      <Router>
        <main >
            <ButtonAppBar/>         
            <Route exact path="/" component={Homescreen} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/SignUp" component={AboutScreen} />
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/test" component={CardComponent} />


        </main>
      </Router>
    </div>

  );
}

export default App;