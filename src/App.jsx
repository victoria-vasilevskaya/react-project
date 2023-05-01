
import React, { Component } from 'react';
import Abonents from './components/Abonents/Abonents';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import st from './App.module.css';
import Header from './components/Header/Header';
import { Main } from './pages/main';




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
    <div className={st.app}>
        <Header />
        
        <Routes>
            <Route path='/' element={<Abonents rows = {this.state.apiResponse} />} />
          </Routes>
      </div>
 
    </BrowserRouter>
  );
}
}

export default App;
