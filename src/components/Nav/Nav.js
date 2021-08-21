import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/am (1).png'
import { Transition } from "@headlessui/react";
import { useAuth } from '../Pages/Sign/Auth/useAuth';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)
    const {currentUser} = useAuth()



    return (
        <div>

            <div>
                <nav className="bg-gray-800" id="nav">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img
                            className="h-12 w-24"
                            src={logo}
                            alt="amir"
                            />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex  items-baseline space-x-4">
                            
                            <Link to="/" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>

                            <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </a>


                            
                            <a href="#service"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Services
                            </a>

                            <Link to="/admin/order" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Admin
                            </Link>
                            
                            

                            <a href="#blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Blogs
                            </a>

                            {
                                currentUser ? 
                                
                                <Link to="/admin/order">
                                    <img title="Profile" class="w-6 " src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="" />
                                </Link>

                                :
                                <Link to="/login" className="text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Login
                                </Link>
                            }

                            


                            </div>
                        </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                            <svg
                                className="block h-6 w-6 text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            ) : (
                            <svg
                                className="block h-6 w-6 text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            )}
                        </button>
                        </div>
                    </div>
                    </div>

                    <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                            <Link to="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </Link>
                            

                            <a
                            href="#about"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            About
                            </a>

                            <a
                            href="#service"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            Services
                            </a>

                            <Link to="/admin/order" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Admin
                            </Link>

                            <a
                            href="#blog"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            Blogs
                            </a>

                            {
                                currentUser ? 
                                
                                <Link to="/admin/order">
                                    <img title="Profile" class="border-2 border-yellow-400 rounded-md p-2 w-12 m-4" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="" />
                                </Link>

                                :
                                <Link to="login" className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Login
                                </Link>
                            }

                            

                        </div>
                        </div>
                    )}
                    </Transition>
                </nav>

                
            </div>
            

        </div>
    );
};

export default Nav;