import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'

function App() {

  return (

    <BrowserRouter> 
      <h1>te st</h1>
      <Routes>
        <Route path = '/' element={<Homepage />} />
        <Route exact path = '/test' element={Homepage} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
