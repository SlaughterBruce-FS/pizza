import React from 'react'
import about from '../public/images/about.jpeg'
import Image from 'next/image'

function About() {
    return (
        <>
            <div className='py-20 md:py-20 text-center px-20'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex flex-col items-center'>
                        <h4 className='text-2xl text-orange-400'>Yallas Pizza</h4>
                        <h3 className='text-4xl uppercase mb-8'>OUR STory</h3>
                        <p className='text-md md:text-xl'>
                            Yallas Pizza is where passion meets flavor. Inspired by the lively streets of Italy, we craft mouthwatering pizzas using the finest ingredients and a whole lot of love. From classic favorites to signature specialties, each pie promises a culinary experience like no other. But it&apos;s not just about the pizza—it&apos;s about the people. Join us at Yallas Pizza and savor great food, great company, and great times.
                        </p>
                    </div>
                    <div>
                        <Image src={about} alt='Pizza Owner' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default About