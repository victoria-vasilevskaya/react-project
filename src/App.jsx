import React, { useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import st from './App.module.css';
import AppRouter from './components/appRouter';


function App(){
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}


export default App;
