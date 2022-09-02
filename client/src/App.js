import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import Header from './components/Header';
import ScoreCalculator from './components/ScoreCalculator';
import SignUp from './views/SignUp';
import Login from './views/Login';

function App() {

  return (

    <BrowserRouter> 
      <Header/>
      <Routes>
        <Route path = '/' element={<Homepage />} />
        <Route path = '/calculator' element={<ScoreCalculator />} />
        <Route path = '/signup' element={<SignUp />} />
        <Route path = '/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
