import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/am (1).png'

const Nav = () => {
    return (
        <div class="fixed left-0 top-0 bg-transparent w-full bg-black bg-opacity-70">
            <div class="py-4 container mx-auto  flex justify-between items-center">
                <div class="w-32">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    
                </div>
                <nav>
                    <ul class="flex justify-end font-medium">
                        <li class="nav-item">
                            <Link to="/">
                              Home
                            </Link>
                            
                        </li>
                        <li class="nav-item">
                            <a href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin/order">
                                Admin
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact">Contact</a>
                        </li>
                        <li class="ml-3">
                            <Link to="login" class="border-2 border-primary text-primary py-2 px-3">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
    );
};

export default Nav;