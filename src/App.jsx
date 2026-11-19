import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

// https://preview.industrial.anpsthemes.com/demo14/
// https://sunhydrauliceng.com/
