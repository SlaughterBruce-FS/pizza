import React from 'react'
import blog1 from '../public/images/blog1.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
    {
        title: 'Pizza of the Month',
        img: blog1,
        date: 'March 20,',
        year: '2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Pizza of the Month',
        img: blog1,
        date: 'March 20,',
        year: '2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Pizza of the Month',
        img: blog1,
        date: 'March 20,',
        year: '2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

function Blog() {
    return (
        <>
            <div className='py-20 md:py-20 flex flex-col items-center'>
                <h4 className='text-2xl text-orange-400'>Recent Events</h4>
                <h3 className='text-4xl'>Latest News</h3>

                <div className='grid  grid-cols-1 md:grid-cols-3 gap-10 px-20 container mt-8'>
                    {articles.map((article, index) => (
                        <div key={index}>
                            <div className='relative'>
                                <span className='absolute z-10 bg-orange-400 rounded-lg text-sm text-white font-bold text-center px-2 py-2 -bottom-4 right-10 '>
                                    <p>March 20,</p>
                                    <p>2024</p>
                                </span>
                                <Image className='relative' src={blog1} alt='Pizza' />

                            </div>
                            <div className='grid grid-cols-2 mt-8 mb-2'>
                                <p>By: Admin</p>
                                <p>5 Comments</p>
                            </div>
                            <h3 className='text-2xl pb-2'>Pizza of the Month</h3>
                            <p className='text-md mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href="/" className='text-orange-400 py-1  px-2 outline outline-offset-0 outline-2 hover:text-white hover:bg-orange-400 hover:px-2 hover:py-2 ' >Read More</Link >
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog