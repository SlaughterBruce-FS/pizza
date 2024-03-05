import React from 'react'
import bg from '../public/images/bottom.png'
import Image from 'next/image'
import deal1 from '../public/images/deal1.jpeg'
import twofour from '../public/images/2four.jpeg'
import studis from '../public/images/studis.jpeg'

const specials = [
    {
        title: 'Family Feast Deal',
        image: deal1,
        description: 'Enjoy a large pizza of your choice, along with a choice of garlic bread or cheesy breadsticks, and a 2-liter soda for only $24.99. Perfect for family nights or gatherings with friends.'
    },
    {
        title: 'Two for Tuesday',
        image: twofour,
        description: 'Buy any medium or large pizza on Tuesdays and get a second pizza of equal or lesser value for half price! Treat yourself and a friend to a delicious pizza night without breaking the bank'
    },
    {
        title: 'Student Discount',
        image: studis,
        description: "Calling all students! Show your student ID and get 15% off your entire order. Whether you're studying late or hanging out with friends, our pizzas are the perfect fuel for your busy student life."
    }
]

function Specials() {
    return (
        <>
            <div className='absolute'>
                <Image src={bg} alt='Pizza' height={600} width={2920} />
            </div>

            <div className='py-20 md:py-48 flex flex-col items-center'>
                <h4 className='text-2xl text-orange-400'>Fresh From Yallas</h4>
                <h3 className='text-4xl'>OUR SPECIALS</h3>

                <div className='grid grid-cols-1 mx-auto px-20 mt-8 md:grid-cols-3 md:px-40 gap-8'>
                    {specials.map((special, index) => (
                        <div key={index} className='text-center'>
                            <h5 className='text-2xl font-bold'>{special.title}</h5>
                            <Image src={special.image} alt='Family eating pizzza' />
                            <p className='text-md mt-8'>{special.description}</p>
                        </div>
                    ))}

                </div>

                <p className='mt-8 italic font-semibold px-20'>** These special offers are valid for a limited time only, so come on down to our restaurant and enjoy some mouthwatering pizza today! **</p>
            </div>
        </>
    )
}

export default Specials