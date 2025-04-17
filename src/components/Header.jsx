import React, { useRef } from 'react'
import vect from "../img/vector.png"
import About from './About'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Header = () => {

  const container = useRef();

  useGSAP(()=>{
    gsap.from('.img img', {
      x : -200,
      delay : 1,
      opacity : 0,
      duration : 1,
      rotate : 360
    })
  }, {scope:container})
  return (
    <div ref={container} className='text-white md:mt-[4%] font-[Montserrat]'>
        <div className='flex flex-col md:flex-col lg:flex-row'>
        <div className="w-[100%] md:w-[100%] lg:w-[50%] right">
            <div className="img">
              <img src={vect} alt="no image" />
            </div>
        </div>
        <div className="left lg:w-[50%] px-5 pb-7">
            <About/>
        </div>
        </div>
    </div>
  )
}

export default Header