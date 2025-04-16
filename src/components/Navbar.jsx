import React, { useRef } from 'react'
import { Link } from 'react-router'
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleClick } from '../redux/toggleMenu';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Navbar = () => {
    const container = useRef();

    useGSAP(()=>{
        gsap.from('.nav li, i', {
            y : -200,
            duration : 1,
            stagger : 0.4,
            opacity : 0
        })
    }, {scope : container})

    const dispatch = useDispatch();
    const toggleState = useSelector((state) => state.menu.toggleMenu);


    const toggler = () => { 
        dispatch(toggleClick())
    }

    return (

        <div ref={container}>
            <div className='px-10 py-4 font-[Montserrat] font-semibold bg-green-500 text-white relative shadow-sm shadow-white'>
                <div className="flex flex-column justify-between nav">
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
                </div>
            </div>

            {toggleState && <Menu />}

        </div>

    )
}

export default Navbar