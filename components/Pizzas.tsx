'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app/globals.css'
import pep from '../public/images/pep.png'
import veg from '../public/images/veg.png'
import delux from '../public/images/delux.png'
import tso from '../public/images/tso.png'
import foud from '../public/images/foud.png'
import v2 from '../public/images/v2.png'
import bg from '../public/images/top2.png'
import bg2 from '../public/images/bottom2.png'


import { Pagination, FreeMode, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

const pizzas = [
    {
        name: 'Pepperoni',
        img: pep,
        description: 'Signature sauce, premium mozzarella cheese, and generous portions of pepperoni',
        price: 12.99,
        type: 'pep'
    },
    {
        name: 'Veggie',
        img: veg,
        description: 'Signature sauce, premium mozzarella cheese, and generous portions of pepperoni',
        price: 12.99,
        type: 'veg'
    },
    {
        name: 'Deluxe',
        img: delux,
        description: 'Signature sauce, premium mozzarella cheese, and generous portions of pepperoni',
        price: 12.99,
        type: 'delux'
    },
    {
        name: 'The Special One',
        img: tso,
        description: 'Signature sauce, premium mozzarella cheese, and generous portions of pepperoni',
        price: 12.99,
        type: 'tso'
    },
    {
        name: 'Four Seasons',
        img: foud,
        description: 'Signature sauce, premium mozzarella cheese, and generous portions of pepperoni',
        price: 12.99,
        type: 'foud'
    },
    {
        name: 'Medaterranean',
        img: v2,
        description: 'Signature sauce, premium mozzarella cheese, and generous portions of pepperoni',
        price: 12.99,
        type: 'v2'
    }
]

function Pizzas() {
    const [isRotated, setIsRotated] = useState<{ [key: string]: boolean }>({ pep: false, veg: false, delux: false, tso: false, foud: false, v2: false });


    const toggleRotation = (pizza: string) => {
        setIsRotated(prevState => ({
            ...prevState,
            [pizza]: !prevState[pizza]
        }));
    };
    return (
        <>
            <div className='relative'>
                <Image src={bg} alt='Pizza' height={600} width={2920} />
            </div>
            <div className='py-20 bg-amber-50'>

                <h2 className='text-center pb-12 text-6xl text-orange-600'>Our Famous Pizzas</h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {pizzas.map((pizza, index) => (
                        <SwiperSlide key={index} className='flex flex-col items-center'>
                            <Image className='drop-shadow-xl ' src={pizza.img} alt='Pepperoni Pizza' width={400} style={{
                                transition: 'transform 0.5s ease',
                                transform: isRotated[pizza.type] ? 'rotate(45deg)' : 'rotate(0deg)',
                            }}
                                onMouseEnter={() => toggleRotation(pizza.type)}
                                onMouseLeave={() => toggleRotation(pizza.type)} />
                            <h3 className='text-3xl font-bold pt-8 text-orange-600'>{pizza.name} </h3>
                            <p className='text-md w-[50%] py-4 text-orange-600'>{pizza.description}</p>
                            <p className='text-lg font-bold text-orange-600'>
                                <span className='text-sm'>small</span> ${pizza.price}
                            </p>

                        </SwiperSlide>
                    ))}



                </Swiper>

                <div className='flex items-center justify-center mt-8'>
                    <Link href="#" className='bg-orange-400 rounded-full px-6 py-4 text-2xl text-white font-bold capitalize hover:bg-orange-600'>View Menu</Link>
                </div>

            </div>

            <div className='relative'>
                <Image src={bg2} alt='Pizza' height={600} width={2920} />
            </div>
        </>
    )
}

export default Pizzas