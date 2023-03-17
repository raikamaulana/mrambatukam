import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-start items-start p-20 mt-10 border-t-2 border-slate-200">
                <div className="p-5 md:mr-32">
                    <ul className="text-gray-800 font-bold text-3xl pb-6">
                        <p>Mr. <span className="text-blue-600">Ambatukam</span></p>
                        <div className="flex gap-6 py-5">
                                <Link href='https://instagram.com/raidwpa' target='_blank'>
                                    <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'></FaInstagram>
                                </Link>
                                <Link href='https://twitter.com/yuukiseira' target='_blank'>
                                    <FaTwitter className='text-2xl cursor-pointer hover:text-yellow-600'></FaTwitter>
                                </Link>
                                <Link href='https://t.me/yuukiraito' target='_blank'>
                                    <FaTelegram className='text-2xl cursor-pointer hover:text-yellow-600'></FaTelegram>
                                </Link>
                                <Link href='https://discord.gg/DktnzVEK' target='_blank'>
                                    <FaDiscord className='text-2xl cursor-pointer hover:text-yellow-600'></FaDiscord>
                                </Link>
                        </div>
                    </ul>
                </div>

                {/* <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Product</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fitures & Options</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutual Funds</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed Deposits</li>
                    </ul>
                </div> */}

                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Tautan</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href='/'>Home</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href='/blog'>Blog</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href='/users'>Users</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href='/contact'>Contact</Link></li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href='/404'>404 Pages</Link></li>
                    </ul>
                </div>
                
                {/* <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Support Portals</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>List Of Charges</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Download & Resources</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Video</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed Deposits</li>
                    </ul>
                </div> */}
            </div>

            <div className='flex flex-col justify-center items-center text-center p-6 bg-slate-300'>
                <h1 className='text-gray-800 font-semibold'>© 2023 Mr. Ambatukam All rights reserved | Build with 💦 by <span className='hover:text-blue-600 font-semibold cursor-pointer'>Mr. Ambatukam</span></h1>
            </div>
        </>
        // <div>
        //     <p className="text-center text-slate-300 pb-5 bg-slate-700 h-full pt-5 mt-12">made with 🥰❤💦 @ambatukam</p>
        // </div>
    )
}
