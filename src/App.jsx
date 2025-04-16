import { BrowserRouter, Route, Router, Routes } from "react-router"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
