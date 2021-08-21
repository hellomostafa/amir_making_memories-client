import React from 'react';
import aboutImg from '../../../img/about1.jpg'

const About = () => {
    return (
        <div class="bg-gray-300" id="about">
            <div class="container mx-auto py-20 flex flex-col-reverse  md:flex-row items-center justify-center">
                <div class="md:w-1/2 md:pr-5 p-8 md:p-0">
                    <h2 class="text-5xl">Hassle-Free Wow  <br/> Photography</h2>
                    <p class="text-2xl py-5">Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.</p>
                    <p>Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur. Excepteur sintxsdfas occaecat cupidatatfug nulla pariatur. Excepteur sintxsdfas occaecat. Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.</p>
                    <a href="#service">
                        <button class="btn-gray mt-7">See Services</button>
                    </a>
                </div>
                <div>
                    <img class="h-96 w-80 md:w-full lg:h-auto rounded-xl shadow-2xl" src={aboutImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;