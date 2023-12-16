import './App.css'
import About from './components/About'
import Home from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/Navbar'
import Procedures from './components/Procedures'
import Contact from './components/Contact'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'


function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const topCheck = () => {
      setIsTopOfPage(window.scrollY === 0);
    }
    window.addEventListener("scroll", topCheck);
    return () => {
      window.removeEventListener('scroll', topCheck);
    }
  }, []);
  return (

    <>
      <BrowserRouter >
        <NavBar isTopOfPage={isTopOfPage} />
        <Banner />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
