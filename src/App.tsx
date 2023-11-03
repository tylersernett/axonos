import './App.css'
import About from './components/About'
import Home from './components/Home'
import { Routes, Route, Link, useMatch, useNavigate, BrowserRouter } from 'react-router-dom'
import NavBar from './components/Navbar'
import Procedures from './components/Procedures'


function App() {

  return (
    <>

      <BrowserRouter >
        <NavBar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="procedures" element={<Procedures />} />
          {/* <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
