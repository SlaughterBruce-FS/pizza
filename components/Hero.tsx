
import React from 'react'
import bg from '../public/images/hero_bg.jpeg'
import Image from 'next/image'
import pizza from '../public/images/pizza.png'

function Hero() {
    return (
        <div className='w-full h-full px-4  z-0 bg-hero-bg' >

            <div className='grid grid-cols-1  md:grid-cols-2 '>
                <div className='items-left '>
                    <h1 className='text-white text-4xl font-bold  pt-20'>Welcome to Yallas Pizza</h1>
                    <p className='text-white '>The best pizza in town</p>
                </div>

                <div className='w-full '>
                    <Image src={pizza} alt='Pepperoni Pizza' height={800} />
                </div>



            </div>
        </div >
    )
}

export default Hero