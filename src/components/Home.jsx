import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <div className=''>
            <Header/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    </div>
  )
}

export default Home