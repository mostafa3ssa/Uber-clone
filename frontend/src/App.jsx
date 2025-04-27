import React from 'react';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import UserSignup from './pages/UserSignup';
import { Routes, Route } from 'react-router-dom';

console.log("App.jsx");

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignup />}/>
        <Route path='/captain-signup' element={<CaptainSignup />}/>
        <Route path='/captain-login' element={<CaptainLogin />}/>
      </Routes>
  );
};

export default App;