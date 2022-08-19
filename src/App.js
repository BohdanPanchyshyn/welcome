import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn';
import HomePage from './pages/homepage/homepage';
import Welcome from './pages/welcome/welcome';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/succesfull' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
