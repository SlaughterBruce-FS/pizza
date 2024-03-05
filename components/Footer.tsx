import React from 'react'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import logo from '../public/images/logo.png'
import Image from 'next/image'

const socialLinks = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com',
        icon: faFacebookF
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com',
        icon: faInstagram
    },
    {
        name: 'Twitter',
        link: 'https://www.twitter.com',
        icon: faTwitter
    },
    {
        name: 'Youtube',
        link: 'https://www.youtube.com',
        icon: faYoutube
    }

]

function Footer() {
    return (
        <div>
            <footer className='bg-orange-400 text-white py-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 container md:px-20 '>
                    <div>
                        <div className='flex flex-col gap-0 items-center'>
                            <Image src={logo} alt='Yallas Pizza logo' height={70} className='drop-shadow-md' />
                            <Link className='font-bold text-2xl' href="#">Yallas Pizza</Link>
                            <div className='mt-4 text-sm grid gap-4 md:gap-0'>
                                <p>123 Main Street</p>
                                <p>New York, NY 10001</p>
                                <p> <span className='font-bold'>Phone:</span>  123-456-7890</p>
                                <p> <span className='font-bold'>Email:</span> contact@yallas.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:justify-end'>
                        <h3 className='text-2xl font-bold'>Opening Hours</h3>
                        <div className='mt-4'>
                            <div className='grid grid-cols-2 gap-5 text-center md:text-left'>
                                <p>Monday - Tues: </p> <p> 9am - 9pm</p>
                                <p>Wednesday - Sat: </p> <p> 9am - 10pm</p>
                                <p>Sunday: </p> <p> Closed</p>
                            </div>


                        </div>
                    </div>
                    <div className='flex flex-col items-center md:justify-end'>
                        <h3 className='text-2xl font-bold'>Quick Links</h3>
                        <ul className='mt-4 grid gap-5 text-center md:text-left'>
                            <li><Link href='#'>Menu</Link></li>
                            <li><Link href='#'>Blog</Link></li>
                            <li><Link href='#'>Reservation</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className='mx-40 my-4' />
                <div className='container mx-auto md:px-20 items-center flex md:flex-row flex-col md:justify-between text-center '>
                    <p>&copy; 2024 Yallas Pizza</p>
                    <div className='flex items-center justify-center my-4 gap-3'>
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.link} className=''>
                                <FontAwesomeIcon height={15} icon={link.icon} />
                            </Link>))}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer