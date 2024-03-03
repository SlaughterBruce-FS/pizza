'use client'
import React, { useState } from 'react'

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Menu',
        href: '#'
    },
    {
        name: 'Blog',
        href: '#'
    },
    {
        name: 'Reservation',
        href: '#'
    }

]

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        console.log('clicked')
        setMenuOpen(!menuOpen)
    }
    return (
        <header className='bg-orange-400 w-full text-white'>
            <div className='flex mx-auto justify-between px-4 py-4 container items-center flex-wrap'>
                <div>
                    <a className='font-bold text-2xl' href="#">Yallas Pizza</a>
                </div>




                <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>



                <div className='md:flex md:items-center md:w-auto w-full '>
                    <nav id='menu' className={` ${menuOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className='md:flex gap-4'>
                            {links.map((link, index) => (
                                <li key={index}><a href={link.href}>{link.name}</a></li>

                            ))}

                            <a className='flex md:hidden' href="#">Order Online</a>
                        </ul>

                    </nav>
                </div>

                <a className='hidden md:flex' href="#">Order Online</a>

            </div>
        </header >

    )
}

export default Navigation