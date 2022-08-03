import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'

function App() {

  return (

    <BrowserRouter> 
      <Routes>
        <Route path = '/' element={<Homepage />} />
        <Route exact path = '/test' element={Homepage} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
