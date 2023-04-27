import React from 'react';
import st from './App.module.css';
import { Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ApplicationForm from './components/application-form/application-form';
import Login from './pages/login/login';

function App() {
  return (
    <div className={st.app}>
      <Login />
    </div>
    /* <div className={st.app}>
      <Header />
      <div>
        
      </div>
    </div> */
  );
}

export default App;
