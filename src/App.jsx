import React, {Component} from 'react';
import './App.css';
import "./sass/app.scss";
import MainUi from "./components/mainui/index.jsx";


class App extends Component{

 
  render(){
    return <div className="app-container">
      <div className="main-container">
          <MainUi/>
      </div>
       
    </div>
  }
}

export default App;
