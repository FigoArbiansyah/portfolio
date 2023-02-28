import React, { useEffect } from 'react'
import {Link, useLocation} from "react-router-dom"

const Navbar = (props) => {

    const openNav = () => {
        const ul = document.querySelector(".link-nav");
        const icon = document.querySelector(".icon");
        ul.classList.toggle("hidden")
        icon.classList.toggle("fa-bars")
        icon.classList.toggle("fa-xmark")
    }

  return (
    <>
        <nav className='fixed top-0 w-full bg-white z-50'>
            <div className="flex justify-between md:h-20 md:items-center md:pt-0 py-3 pl-6">
                <div className='w-2/3'>
                    <p className="text-2xl font-semibold italic navbar-brand">Figo.</p>
                </div>
                <div className='md:w-1/3'>
                    <button type='button' onClick={() => openNav()} className='text-black mr-6 md:hidden text-xl'>
                        <i className="icon fa-solid fa-bars"></i>
                    </button>
                    <ul className='md:flex md:flex-row flex-col link-nav justify-center gap-6 hidden text-md text-gray-600 group transition-all ease duration-1000'>
                        <li className={`link hover:text-black ${props.root}`}>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className={`link hover:text-black ${props.about}`}>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className={`link hover:text-black ${props.skills}`}>
                            <Link to={"/skills"}>Skills</Link>
                        </li>
                        <li className={`link hover:text-black ${props.projects}`}>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li className={`link hover:text-black ${props.contact}`}>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar