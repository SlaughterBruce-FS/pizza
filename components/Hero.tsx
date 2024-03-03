
import React from 'react'
import bg from '../public/images/hero_bg.jpeg'
import Image from 'next/image'
import pizza from '../public/images/pizza.png'
import Link from 'next/link'

function Hero() {
    return (
        <div className='w-full h-[100vh]  z-0 bg-hero-bg ' >
            <div className='grid grid-cols-1  md:grid-cols-2 md:items-center '>
                <div className='items-left py-8 md:py-0 flex flex-col items-center gap-4 '>
                    <h1 className='text-white text-center text-4xl md:text-6xl font-bold  pt-20 md:pt-0'>Welcome to Yallas Pizza</h1>
                    <p className='text-white text-center'>The best pizza in town</p>
                    <Link href="#" className='bg-orange-400 rounded px-4 py-2 text-white font-bold capitalize '>Order now</Link>
                </div>

                <div className='px-20 md:px-0  md:py-20'>
                    <Image src={pizza} alt='Pepperoni Pizza' className='h-full md:h-100 w-full' />
                </div>



            </div>
        </div >
    )
}

export default Hero