import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { toggleClick } from '../redux/toggleMenu';
import gsap from 'gsap';

const Menu = () => {

    const dispatch = useDispatch();

    const getToggle = useSelector((state)=> state.menu.toggleMenu);

    const toggler = () =>{
        dispatch(toggleClick())
       if (getToggle === true) {
        let timeline = gsap.timeline();
        timeline.from(".ullist", {
          rotate: 45,
        });
       }
    }

    console.log(getToggle);
    
    return (
        <div className='absolute md:hidden z-3 bg-black text-white w-90 px-5 py-2 shadow-lg shadow-cyan-100'>
            <ul onClick={toggler} className='ullist'>
                <Link to='/'>
                    <li className='border-2 border-green-300 p-2 rounded-lg m-2 cursor-pointer'>Home</li>
                </Link>

                <Link to='/about'>
                    <li className='border-2 border-green-300 p-2 rounded-lg m-2 cursor-pointer'>About</li>

                </Link>

                <Link to='/projects'>
                    <li className='border-2 border-green-300 p-2 rounded-lg m-2 cursor-pointer'>Projects</li>

                </Link>

                <Link to='/skills'>
                    <li className='border-2 border-green-300 p-2 rounded-lg m-2 cursor-pointer'>Skills</li>

                </Link>

                <Link to='/contact'>
                    <li className='border-2 border-green-300 p-2 rounded-lg m-2 cursor-pointer'>Contact</li>

                </Link>
            </ul>
        </div>
    )
}

export default Menu