import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 0,
    });
  }, []);

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
