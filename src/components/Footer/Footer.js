import React from 'react';
import logoW from '../../img/am (1).png'

const Footer = () => {
    return (
        <div class="bg-black text-gray-200 text-center pt-12 pb-6 flex flex-col justify-center items-center">
            <img src={logoW} alt="" class="w-32"/>
            <nav>
                <ul class="flex justify-center pt-10 pb-7 text-primary">
                    <li class="mx-4 cursor-pointer hover:text-white">Home</li>
                    <li class="mx-4 cursor-pointer hover:text-white">About</li>
                    <li class="mx-4 cursor-pointer hover:text-white">Service</li>
                    <li class="mx-4 cursor-pointer hover:text-white">Blog</li>
                    <li class="mx-4 cursor-pointer hover:text-white">Contact</li>
                </ul>
            </nav>
            <div class="social">
                <i class="fab fa-facebook-f mx-2 rounded-full border py-2 px-3 bg-transparent hover:bg-primary hover:text-black transition ease-in-out duration-700 cursor-pointer"></i>
                <i class="fab fa-twitter mx-2 rounded-full border p-2 bg-transparent hover:bg-primary hover:text-black transition ease-in-out duration-700 cursor-pointer"></i>
                <i class="fab fa-instagram mx-2 rounded-full border py-2 px-2 bg-transparent hover:bg-primary hover:text-black transition ease-in-out duration-700 cursor-pointer"></i>
            </div>

            <div className="footer-bottom pt-12 text-gray-400">
                <p class="font-normal text-xs">Copyright ©2021 All rights reserved. Made with <i class="fas fa-heart text-primary"></i> by <span class="text-primary">Mostafa</span></p>
            </div>
        </div>
    );
};

export default Footer;