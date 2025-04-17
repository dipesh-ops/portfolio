import React, { useEffect } from 'react'
import gsap from 'gsap'
import project1 from '../img/projectImages/Screenshot (30).png'
import project2 from '../img/projectImages/Screenshot (40).png'
import project3 from '../img/projectImages/Screenshot (56).png'
const Projects = () => {

  useEffect(()=>{
    gsap.from('#Head', {
      transform : 'translateY(70%)',
      stagger : 2,
      scrollTrigger : {
        trigger : '#Head',
        scroller : 'body',
        start : 'top 80%',
        end : 'top 65%',
        scrub : 1,
      }
    })
  },[])
  return (
    <div className='text-white px-7 md:px-15 mb-15'>
      <div className='mt-18 flex justify-center'>
        <h1 id='Head'  className='text-5xl montSerratBold'>Here Are <span className='text-pink-400'>Some</span> Of My <span className='text-green-500'>Projects</span></h1>
      </div>

      <div className='mt-15'>
        <div className="p1 flex flex-wrap justify-center">
          <div className="w-80 rounded-lg m-4 shadow-md hover:shadow-cyan-100 transition delay-150 ease-in-out">
            <a target='_blank' href="https://cinevortex.vercel.app/">
            <img src={project1} alt="no image" />
            </a>
          </div>

          <div className="w-80 rounded-lg m-4 shadow-lg hover:shadow-cyan-100 transition delay-150 ease-in-out">
            <a target='_blank' href="https://ecommers-app-iota.vercel.app/">
            <img src={project2} alt="no image" />
            </a>
          </div>

          <div className="w-80 rounded-lg m-4 shadow-lg hover:shadow-cyan-100 transition delay-150 ease-in-out">
            <a target='_blank' href="https://netflix-blush-phi.vercel.app/">
            <img src={project3} alt="no image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects