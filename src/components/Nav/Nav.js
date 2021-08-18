import React from 'react';
import logo from '../../img/am (1).png'

const Nav = () => {
    return (
        <div class="fixed left-0 top-0 bg-transparent w-full bg-black bg-opacity-50">
            <div class="py-4 container mx-auto  flex justify-between items-center">
                <div class="w-32">
                    <img src={logo} alt=""/>
                </div>
                <nav>
                    <ul class="flex justify-end font-medium">
                        <li class="nav-item">
                            <a href="#hero">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
    );
};

export default Nav;