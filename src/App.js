import './App.css';
import React from 'react';
import Home from './Components/Home'
import MakeReservation from './Components/MakeReservation'
import About from './Components/About'
import { 
  Routes, 
  Route } 
  from 'react-router-dom'

function App() {
  return ( 
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makereservation" element={<MakeReservation />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}

export default App;
