import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home'
import MakeReservation from './Components/MakeReservation'
import About from './Components/About'
import Navbar from './Components/Navbar'
import { 
  Routes, 
  Route } 
  from 'react-router-dom'

function App() {

  const [data, setData] = useState([])
  const getData = async () => {
    const r = await fetch('http://localhost:3000/resos')
    const s = await r.json()
    setData(s)
  }
  useEffect(() => {
    getData()
  }, [])

  return ( 
    <>
       <Navbar data={data} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makereservation" element={<MakeReservation />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
    </>
  );
}

export default App;
