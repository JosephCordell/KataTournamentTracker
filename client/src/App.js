import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import Header from './components/Header';
import ScoreCalculator from './components/ScoreCalculator';
import SignUp from './views/SignUp';
import axios from 'axios';
import Login from './views/Login';
import Divisions from './views/Divisions';
import Rank from './views/Rank';

function App() {
  const [user, setUser] = useState({
    query: '',
    searchLoad: true,
    loggedIn: localStorage.getItem('loggedIn'),
  });

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('loggedIn') !== 'true') {
      axios.post('/api/users/login', {}, { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then((response) => {
          if (response.status === 200) {
            setUser({ ...user, loggedIn: response.data.logged_in });
            localStorage.setItem(`loggedIn`, true);
          } else {
            setUser({ ...user, loggedIn: false });
            localStorage.removeItem(`loggedIn`);
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);
  return (

    <BrowserRouter>
      <Header user={user} setUser={setUser} loggedIn={user.loggedIn} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/calculator' element={<ScoreCalculator />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/divisions' element={<Divisions/>} />
        <Route path='/divisions/:rank' element={<Rank/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
