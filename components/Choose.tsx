import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bg from '../public/images/bottom.png'
import Image from 'next/image'
import React from 'react'

function Choose() {
    return (
        <>

            <div className='py-20 bg-orange-500 '>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20 container mx-auto px-20 ' >
                    <div className='w-full flex flex-col items-center gap-4'>
                        <FontAwesomeIcon className='w-10' icon={faUtensils} />
                        <h3 className='font-bold text-2xl capitalize'>Order food</h3>
                        <p className='text-lg text-center'>
                            Satisfy your cravings with just a few clicks! Order your favorite cuisine from a diverse menu, customized to your taste, and enjoy swift delivery or convenient pickup options. Indulge in a delightful dining experience, right at your fingertips</p>
                    </div>
                    <div className='w-full flex flex-col items-center gap-4'>
                        <FontAwesomeIcon className='w-10' icon={faUtensils} />
                        <h3 className='font-bold text-2xl capitalize'>Order food</h3>
                        <p className='text-lg text-center'>
                            Satisfy your cravings with just a few clicks! Order your favorite cuisine from a diverse menu, customized to your taste, and enjoy swift delivery or convenient pickup options. Indulge in a delightful dining experience, right at your fingertips</p>
                    </div>
                    <div className='w-full flex flex-col items-center gap-4'>
                        <FontAwesomeIcon className='w-10' icon={faUtensils} />
                        <h3 className='font-bold text-2xl capitalize'>Order food</h3>
                        <p className='text-lg text-center'>
                            Satisfy your cravings with just a few clicks! Order your favorite cuisine from a diverse menu, customized to your taste, and enjoy swift delivery or convenient pickup options. Indulge in a delightful dining experience, right at your fingertips</p>
                    </div>
                </div>


            </div >
        </>
    )
}

export default Choose