import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { toggleClick } from '../redux/toggleMenu';
import gsap from 'gsap';
import resume from '../resume/Dipesh Resumedocx.pdf'

const Menu = () => {

    const dispatch = useDispatch();

    const getToggle = useSelector((state) => state.menu.toggleMenu);

    const toggler = () => {
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

                <li className='border-2 border-green-300 p-2 rounded-lg m-2 cursor-pointer'>
                    <a href={resume} download='Myresume.pdf'>Get My Resume <i className="ri-download-fill"></i></a>
                </li>

                <li className='border-2 border-green-300 p-2 rounded-lg m-2 cursor-pointer'>
                    <a href="https://www.linkedin.com/in/dipesh-meshram"><i className="border mr-1 hover:bg-blue-500 border-green-300 rounded-md p-2 ri-linkedin-line"></i></a>
                    <a href="https://www.instagram.com/_dipesh_meshram/"><i className="border mr-1 hover:bg-blue-500 border-green-300 rounded-md p-2 ri-linkedin-line"></i></a>
                    <a href="https://github.com/dipesh-ops"><i className="border mr-1 hover:bg-black border-green-300 rounded-md p-2 ri-github-fill"></i></a>
                </li>

            </ul>
        </div>
    )
}

export default Menu