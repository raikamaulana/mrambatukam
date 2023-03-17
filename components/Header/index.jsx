import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react"; // for smooth transition between tabs 
// import { Link } from "react-scroll"; // Alternate for a tag. In NextJS boku use Link for ref.

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* for main container */}
            <nav className="shadow-sm fixed md:w-[98.5%] w-[97%] -z-1 bg-white bg-opacity-70 backdrop-blur-[2px]">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        {/* first block section outer part  */}
                        <div className="flex items-center mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-bold text-xl cursor-pointer font-mono">Mr. <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text font-bold">Ambatukam</span></h1>
                            </div>
                            {/* for small screen and on medium device, change as block */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer px-3 py-2 font-semibold text-blue-500 text-md hover:text-blue-700">Home</Link>
                                    <Link href="/blog" activeClass="blog" to="blog" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-md font-medium">Blog</Link>
                                    <Link href="/users" activeClass="users" to="users" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-md font-medium">Users</Link>
                                    <Link href="/contact" activeClass="contact" to="contact" smooth={true} offset={50} duration={500} className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-md font-medium hover:bg-black">Contact</Link>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Responsive */}
                        <div className="mr-10 flex md:hidden">
                            {/* terdapat beberapa properti seperti jika di klik, apa yang akan terjadi pada mode mobel */}
                            <button onClick={() => setIsOpen(!isOpen)} type='button' className="bg-blue-600 text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* Mengambil menu icon dari website w3 */}
                                {/* d is shape code */}
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                    // for menu shape
                                ):(
                                    <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                    // for cross shape
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menambahkan transisi smooth di mode mobile */}
                <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    {(ref) => (
                        // meng handle tab menu
                        <div className="md:hidden id=mobile-menu">
                            <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Home
                                </Link>
                                <Link href="/blog" activeClass="blog" to="blog" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Blog
                                </Link>
                                <Link href="/users" activeClass="users" to="users" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Users
                                </Link>
                                <Link href="/contact" activeClass="contact" to="contact" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>

        // <header className="p-4 mb-12 shadow-md shadow-black mx-auto w-full">
        //     <div className="flex items-center">
        //         <p className="w-full text-3xl ml-10 font-mono bg-gradient-to-r from-red-500 via-white to-blue-500 text-transparent bg-clip-text select-none"><a href="https://github.com" target='_blank'>mr.ambatukam</a></p>
        //         <ul className="flex justify-end list-none w-full mr-10 select-none">
        //         <li><Link href='/' className="py-0 px-4 text-blue-800 hover:text-red-500 font-medium">Home</Link></li>
        //         <li><Link href='/blog' className="py-0 px-4 hover:text-red-500 font-medium">Blog</Link></li>
        //         <li><Link href='/users' className="py-0 px-4 hover:text-red-500 font-medium">Users</Link></li>
        //         <li><Link href='/contact' className="py-1 px-4 ml-10 font-medium bg-gradient-to-b from-slate-800 via-slate-800 to-slate-400 text-white rounded-md hover:bg-gradient-to-b hover:from-blue-800 hover:via-blue-800 hover:to-blue-300">Contact</Link></li>
        //         </ul>
        //     </div>
        // </header>
    )
}
