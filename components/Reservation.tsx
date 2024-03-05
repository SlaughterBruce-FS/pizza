import React from 'react'
import bg from '../public/images/top2.png'
import bg2 from '../public/images/bottom2.png'
import Image from 'next/image'


function Reservation() {
    return (
        <>
            <div className='relative'>
                <Image src={bg} alt='Pizza' height={600} width={2920} />
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2  bg-amber-50'>
                <div className='flex flex-col items-center'>
                    <h4 className='text-2xl text-orange-400'>Save Your Spot</h4>
                    <h3 className='text-4xl'>Book Online</h3>
                    <div className='px-20 text-center text-md mt-8'>
                        <p className='md:text-lg md:w-[400px]'>Elevate your dining experience with ease! Reserve a table at our restaurant, where exquisite cuisine meets inviting ambiance. Enjoy impeccable service and create memorable moments with your loved ones, ensuring a delightful and unforgettable mealtime.</p>
                        <div className='mt-8'>
                            <p className='md:bg-orange-400 md:text-white md:py-4 md:border-orange-600 md:border-4'>Phone: 212-555-1234</p>
                        </div>

                    </div>
                </div>
                <div className='px-20'>
                    <form className='grid grid-cols-1  gap-4 my-8'>
                        <input type="text" placeholder='Name' className='border-2 border-orange-300 px-4 py-2' />
                        <input type="text" placeholder='Phone' className='border-2 border-orange-300 px-4 py-2' />
                        <input type="text" placeholder='Email' className='border-2 border-orange-300 px-4 py-2' />
                        <input type="text" placeholder='Date' className='border-2 border-orange-300 px-4 py-2' />
                        <input type="text" placeholder='Time' className='border-2 border-orange-300 px-4 py-2' />
                        <input type="text" placeholder='Number of Guests' className='border-2 border-orange-300 px-4 py-2' />
                        <button className='bg-orange-400 rounded-full px-4 py-2 text-md text-white font-bold capitalize hover:bg-orange-600'>Book Now</button>
                    </form>
                </div>

            </div>
            <div className='relative'>
                <Image src={bg2} alt='Pizza' height={600} width={2920} />
            </div>
        </>
    )
}

export default Reservation