import React from 'react';
import logoW from '../../img/am (1).png'

const Footer = () => {
    return (
        <div class="bg-gray-800 text-gray-200 text-center pt-12 pb-6 flex flex-col justify-center items-center relative">
            <img src={logoW} alt="" class="w-32"/>
            <nav>
                <ul class="flex justify-center pt-10 pb-7 text-gray-300">
                    <li class="mx-0 md:mx-2 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</li>
                    <li class="mx-0 md:mx-2 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</li>
                    <li class="mx-0 md:mx-2 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Service</li>
                    <li class="mx-0 md:mx-2 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</li>
                    <li class="mx-0 md:mx-2 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</li>
                </ul>
            </nav>
            <div class="social">
                <i class="fab fa-facebook-f mx-2 rounded-full border py-2 px-3 bg-transparent hover:bg-primary hover:text-black transition ease-in-out duration-700 cursor-pointer"></i>
                <i class="fab fa-twitter mx-2 rounded-full border p-2 bg-transparent hover:bg-primary hover:text-black transition ease-in-out duration-700 cursor-pointer"></i>
                <i class="fab fa-instagram mx-2 rounded-full border py-2 px-2 bg-transparent hover:bg-primary hover:text-black transition ease-in-out duration-700 cursor-pointer"></i>
            </div>

            <div className="footer-bottom pt-12 text-gray-400 md:flex">
                <p class="font-normal text-xs">Copyright © {(new Date().getFullYear())} All rights reserved. </p>
                <p class="text-xs">Made with <i class="fas fa-heart text-primary"></i> by <a href="//mostafamahmud.netlify.app" target="_blank" rel="noreferrer" class="text-primary">Mostafa</a></p>
            </div>
            <div>
                <a href="#nav"  class="absolute bottom-12 right-8 bg-gray-900 shadow-md py-3 px-4 rounded-sm  animate-bounce">
                    <i class="fas fa-level-up-alt text-primary"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;