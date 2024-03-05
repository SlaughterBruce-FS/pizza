
import React from 'react'
import bg from '../public/images/top.png'
import Image from 'next/image'
import pizza from '../public/images/pizza.png'
import Link from 'next/link'

function Hero() {
    return (
        <div className='w-full h-[600px] relative overflow-hidden z-0 bg-hero-bg  '>
            <div className=' bg-black/50 w-full h-full absolute z-0'>

            </div>
            <div className='grid grid-cols-1 h-[90vh] md:grid-cols-2 md:items-center relative '>
                <div className='items-left md:pl-8 py-8 md:py-0 flex flex-col justify-end items-center gap-4 '>
                    <h1 className='text-white text-center text-6xl md:text-9xl font-bold  pt-20 md:pt-0'>Welcome to <span className='text-orange-500'>Yallas </span>Pizza</h1>
                    <p className=' text-center text-2xl md:text-4xl text-orange-500 capitalize tracking-widest '>The best pizza in town</p>
                    <Link href="#" className='bg-orange-400 rounded-full px-4 py-2 text-xl text-white font-bold capitalize hover:bg-orange-600'>Order now</Link>
                </div>

                <div className='px-20 md:px-0  md:py-20'>
                    <Image src={pizza} alt='Pepperoni Pizza' height={600} />
                </div>



            </div>
            <div className='relative'>
                <Image src={bg} alt='Pizza' height={600} width={2920} />
            </div>
        </div >
    )
}

export default Hero