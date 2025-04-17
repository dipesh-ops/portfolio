import React, { useRef } from 'react'
import { Link } from 'react-router'
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleClick } from '../redux/toggleMenu';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import resume from '../resume/Dipesh Resumedocx.pdf'

const Navbar = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.nav li, i', {
            y: -200,
            duration: 1,
            stagger: 0.4,
            opacity: 0
        })
    }, { scope: container })

    const dispatch = useDispatch();
    const toggleState = useSelector((state) => state.menu.toggleMenu);


    const toggler = () => {
        dispatch(toggleClick())
    }

    return (

        <div ref={container}>
            <div className='px-10 py-4 font-[Montserrat] font-semibold bg-green-500 text-white relative shadow-sm shadow-white'>
                <div className="flex flex-column justify-between items-center nav">
                    <ul>
                        <Link to='/' className='cursor-pointer'><li>My PortFolio</li></Link>
                    </ul>

                    {!toggleState ? <i onClick={toggler} className="text-2xl block md:hidden ri-menu-2-fill"></i> :

                        <i onClick={toggler} className="text-2xl ri-menu-fold-line"></i>

                    }

                    {/* 
                    { !toggleMenu ? <ul className='block md:hidden'>
                        <button onClick={toggler}>toggle</button>
                        <i onClick={() => setToggleMenu(!toggleMenu)} className="text-2xl ri-menu-2-fill"></i>
                    </ul> : 
                        <ul className='block md:hidden'>
                            <button>toggle</button>
                        <i onClick={() => setToggleMenu(!toggleMenu)} className="text-2xl ri-menu-fold-line"></i>
                    </ul>
                    } */}

                    <ul className='cursor-pointer md:flex flex-column gap-4 hidden md:block'>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/projects'>
                            <li>Projects</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='/contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>

                    <ul className='hidden md:block'>
                        <div className='flex justify-center items-center gap-2'>
                            <li className='bg-green-400 hover:bg-blue-500 rounded-md px-3 py-2'>
                                <a href={resume} download='Myresume.pdf'>Get My Resume <i className="ri-download-fill"></i></a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/dipesh-meshram" target='_blank'><i className="border hover:bg-blue-500 border-green-300 rounded-md p-2 ri-linkedin-line"></i></a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/_dipesh_meshram/" target='_blank'><i className="border hover:bg-pink-700 border-green-300 rounded-md p-2 ri-instagram-line"></i></a>
                            </li>

                            <li>
                                <a href="https://github.com/dipesh-ops" target='_blank'><i className="border hover:bg-black border-green-300 rounded-md p-2 ri-github-fill"></i></a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            {toggleState && <Menu />}

        </div>

    )
}

export default Navbar