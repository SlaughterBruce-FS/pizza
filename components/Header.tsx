import React from 'react'
import bg from '../public/images/hero_bg.jpeg'
import Image from 'next/image'
import pizza from '../public/images/pizza.png'
import Navigation from './Navigation'
import Hero from './Hero'

function Header() {
    return (
        <>
            <Navigation />
            <Hero />
        </>
    )
}

export default Header