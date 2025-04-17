import React, { useEffect, useRef } from 'react'
import htmlImg from '../img/html.jpeg'
import cssImg from '../img/css.jpg'
import javascriptImgImg from '../img/javascript.jpg'
import reactImg from '../img/react.webp'
import tailwindImg from '../img/tailwind.png'
import bootstrapImg from '../img/bootstrap.jpeg'
import githubImg from '../img/github.jpeg'
import vscodeImg from '../img/vscode.jpg'
import postmanImg from '../img/postman.png'
import gsapImg from '../img/gsap.png'
import insomniaImg from '../img/Insomnia.webp'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Skills = () => {

  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  useEffect(()=>{
    gsap.from('#heading', {
      transform : 'translateY(-50%)',
      scrollTrigger : {
        trigger : '#heading',
        scroller : 'body',
        start : 'top 90%',
        end : 'top 80%',
        scrub : 2
      }
    })

    gsap.from('#frontEnd', {
      transform : 'translateX(-100%)',
      scrollTrigger : {
        trigger : '#frontEnd',
        scroller : 'body',
        start : 'top 90%',
        end : 'top 80%',
        scrub : 2,
      }
    })

    gsap.from('#imgContainer img', {
      transform : 'translateX(-100%)',
      stagger : 2,
      scrollTrigger : {
        trigger : '#imgContainer img',
        duration : 1,
        opacity : 0,
        scroller : 'body',
        start : 'top 90%',
        end : 'top 80%',
        scrub : 2,
      }
    })

    
    gsap.from('#frontEnd2', {
      transform : 'translateX(-100%)',
      scrollTrigger : {
        trigger : '#frontEnd2',
        scroller : 'body',
        start : 'top 90%',
        end : 'top 80%',
        scrub : 2,
      }
    })

      gsap.from('#imgContainer2 img', {
      transform : 'translateX(-100%)',
      stagger : 2,
      scrollTrigger : {
        trigger : '#imgContainer2 img',
        duration : 1,
        opacity : 0,
        scroller : 'body',
        start : 'top 90%',
        end : 'top 80%',
        scrub : 2,
      }
    })

  }, [])
  return (
    <div ref={container} className='text-white text-3xl overflow-hidden montserrat p-4 md:p-15 bg-neutral-800'>
        <h1 id='heading' className='heading'>Things I'm <span className='text-green-500'>Good</span> At</h1>

        <div>
          <div className='mt-10'>
              <h1 id='frontEnd' className='bg-gradient-to-r from-purple-400 to-green-500 poetsenOne p-4 rounded-md md:w-[30%]'>Front-End Development</h1>
          </div>
          <div className=''>
            <div id='imgContainer' className='mt-5 flex flex-wrap justify-center md:justify-start'>
              <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={htmlImg} alt="no image" />
              <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={cssImg} alt="no image" />
              <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={javascriptImgImg} alt="no image" />
              <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={reactImg} alt="no image" />
              <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={gsapImg} alt="no image" />
              <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={tailwindImg} alt="no image" />
              <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={bootstrapImg} alt="no image" />
            </div>
          </div>
        </div>

        <div>
          <div className='mt-10'>
              <h1 id='frontEnd2' className='bg-gradient-to-r from-purple-400 to-green-500 poetsenOne p-4 rounded-md md:w-[30%]'>Tools & Technologies</h1>
          </div>

          <div>
          <div id='imgContainer2' className='mt-5 flex flex-wrap justify-center md:justify-start'>
            <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={githubImg} alt="no image" />
            <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={vscodeImg} alt="no image" />
            <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={postmanImg} alt="no image" />
            <img className='w-30 h-30 rounded-lg mr-3 mb-4' src={insomniaImg} alt="no image" />
          </div>
          </div>
        </div>
      
    </div>
  )
}

export default Skills