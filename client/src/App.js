import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage';











const App = () => {

  return (
    <BrowserRouter>
      <h1>test</h1>
      <Routes>
        <Route path = '/' component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
