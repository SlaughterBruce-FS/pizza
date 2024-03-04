import React from 'react'
import bg from '../public/images/bottom.png'
import Image from 'next/image'

function Specials() {
    return (
        <>
            <div className='absolute'>
                <Image src={bg} alt='Pizza' height={600} width={2920} />
            </div>

            <div className='py-20'>

                special
            </div>
        </>
    )
}

export default Specials