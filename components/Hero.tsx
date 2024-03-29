'use client'
import React from 'react'
import bg from '../public/images/top.png'
import Image from 'next/image'
import pizza from '../public/images/pizza.png'
import Link from 'next/link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

function Hero() {

    const pizzas = useRef<HTMLDivElement>(null);


    useEffect(() => {

        let ctx = gsap.context(() => {
            gsap.to("#pizzas", { rotate: 360, duration: 5 })
            // gsap.to("#info", { x: -200, duration: 5 })
            gsap.fromTo("#info", { x: -800 }, { x: 0, duration: 3 })
            gsap.fromTo("#buton", { y: 600 }, { y: 0, duration: 3 })
            gsap.fromTo("#subtext", { opacity: 0 }, { opacity: 1, duration: 5 })
        });

        return () => ctx.revert();


    }, [])

    return (
        <>
            <div className='w-full h-[600px] relative overflow-hidden z-0 bg-hero-bg '>
                <div className=' bg-black/50 w-full h-full absolute z-0'>

                </div>
                <div className='grid grid-cols-1 h-[90vh] md:grid-cols-2 md:items-center relative '>
                    <div className='items-left md:pl-8 py-8 md:py-0 flex flex-col justify-end items-center gap-4 '>
                        <h1 id='info' className='text-white text-center text-6xl md:text-9xl font-bold  pt-20 md:pt-0'>Welcome to <span className='text-orange-500'>Yallas </span>Pizza</h1>
                        <p id='subtext' className=' text-center text-2xl md:text-4xl text-orange-500 capitalize tracking-widest '>The best pizza in town</p>
                        <Link href="#" id='buton' className='bg-orange-400 rounded-full px-6 py-4 text-2xl text-white font-bold capitalize hover:bg-orange-600'>Order now</Link>
                    </div>

                    <div className='px-20 md:px-0  md:py-20'>
                        <Image id='pizzas' src={pizza} alt='Pepperoni Pizza' height={600} />
                    </div>



                </div>
                <div className='relative'>
                    <Image src={bg} alt='Pizza' height={600} width={2920} />
                </div>
            </div>
        </>
    )
}

export default Hero