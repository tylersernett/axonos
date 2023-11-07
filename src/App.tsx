import './App.css'
import About from './components/About'
import Home from './components/Home'
import { Routes, Route, Link, useMatch, useNavigate, BrowserRouter } from 'react-router-dom'
import NavBar from './components/Navbar'
import Procedures from './components/Procedures'
import Contact from './components/Contact'
import Banner from './components/Banner'
import Footer from './components/Footer'


function App() {

  return (
    <>

      <BrowserRouter >
        <NavBar />
        <Banner />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="procedures" element={<Procedures />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
