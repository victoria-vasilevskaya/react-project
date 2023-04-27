import React from 'react';
import st from './App.module.css';
import Header from './components/Header/Header';
import ApplicationForm from './components/application-form/application-form';
import Login from './pages/login/login';
import { Main } from './main';

function App() {
  return (
    <div className={st.app}>
      <Main />
    </div>
  );
}

export default App;
