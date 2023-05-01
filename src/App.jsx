import React, { Component } from 'react';
import './App.module.css';
import Abonents from './components/Abonents/Abonents';
import Header from './components/Header/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';





class App extends Component {
   
  constructor(props){
    super(props);
    this.state = { apiResponse: []};
}
callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(response => {
      if (!response.ok) {
          throw new Error("HTTP error " + response.status);
      }
      return response.json();
  })
  .then(json => {
      this.users = json;
      console.log(this.users);
      this.setState(this.state.apiResponse=this.users);

  })
  .catch(function () {
      this.dataError = true;
  })
}
componentWillMount() {
    this.callAPI();
}
 
render(){
  return (
    <BrowserRouter>
    <div className="app">
      <div className="app-container">
        <Header />
        
        <Routes>
            <Route path='/' element={<Abonents rows = {this.state.apiResponse} />} />
          </Routes>

        <div className="content">
          <div className="content-container">
            
          </div>
        </div>
      </div>
    
    </div>
    </BrowserRouter>
  );
}
}

export default App;

