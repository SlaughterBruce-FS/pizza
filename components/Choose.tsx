import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bg from '../public/images/bottom.png'
import Image from 'next/image'
import React from 'react'

const choose = [
    {
        title: 'Exceptional Quality Ingredients',
        description: 'We pride ourselves on using only the freshest and highest quality ingredients in every pizza we make. From our handcrafted dough to our flavorful sauce and premium toppings, each bite is a testament to our commitment to excellence.'
    },
    {
        title: 'Wide Variety of Options',
        description: "Whether you're a meat lover, a veggie enthusiast, or craving something unique, we have a pizza for everyone. Our extensive menu features a wide variety of specialty pizzas, customizable options, and mouthwatering sides to satisfy any craving."
    },
    {
        title: 'Outstanding Customer Service',
        description: 'At our restaurant, customer satisfaction is our top priority. From the moment you walk in the door to the last bite of your pizza, our friendly and attentive staff are dedicated to providing you with a memorable dining experience. We go above and beyond to ensure that every customer leaves happy and satisfied.'
    }
]

function Choose() {
    return (
        <>

            <div className='py-20 bg-orange-500 '>
                <h4 className='text-2xl text-white text-center'>Best Pizza In Town</h4>
                <h3 className='text-4xl text-center mb-8 uppercase'>Why Choose Us</h3>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20 container mx-auto px-20 ' >
                    {choose.map((item, index) => (
                        <div key={index} className='w-full flex flex-col items-center gap-4'>
                            <FontAwesomeIcon className='w-10' icon={faUtensils} />
                            <h3 className='font-bold text-2xl capitalize'>{item.title}</h3>
                            <p className='text-lg text-center'>
                                {item.description}</p>
                        </div>
                    ))}

                </div>


            </div >
            <div className=''>
                <Image src={bg} alt='Pizza' height={600} width={2920} />
            </div>
        </>
    )
}

export default Choose