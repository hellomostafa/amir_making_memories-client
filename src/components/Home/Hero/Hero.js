import React from 'react';
import sign from '../../../img/handwr.png'

const Hero = () => {
    return (
        <div class="bg-hero h-screen w-full bg-cover bg-no-repeat bg-center" id="hero">
            <div class="mx-auto container text-white flex flex-col items-center justify-center h-screen ">
                <h1 class="lg:text-8xl text-6xl ">Photography</h1>
                <img src={sign} alt="" class="lg:w-96 w-3/6"/>
                <a href="#service">
                <button class="button">Explore Services </button>
                </a>
                <span class="text-primary pt-5  animate-bounce"><i class="fas fa-chevron-down animate-bounce"></i></span>
            </div>
        </div>
    );
};

export default Hero;