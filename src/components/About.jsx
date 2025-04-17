import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {

  const container = useRef();

  useGSAP(()=>{
    gsap.from('.paragraph',{
      x : 200,
      opacity : 0,
      delay : 1,
      duration : 2,
    })
  },{scope : container})
  return (
    <div ref={container}>
      <div className="lg:h-screen flex justify-center items-center text-white">
        <p className='paragraph poetsenOne md:w-140 text-[38px]'>Hi, I'm <span className='text-green-500'>Dipesh Meshram</span>. A passionate React.js developer specializing in building modern, responsive, and scalable web applications. Let's turn ideas into seamless digital experiences."</p>
      </div>
    </div>
  )
}

export default About