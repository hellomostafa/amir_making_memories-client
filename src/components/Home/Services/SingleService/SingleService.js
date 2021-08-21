import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    return (
        <div class="w-80 m-5 shadow-2xl">
            <img class="rounded-t-lg" src={service.img} alt="" />
            <div class="pt-4 px-4 pb-7 rounded-xl">
                <h3 class="text-3xl">{service.name}</h3>
                <p class="py-3">{service.details}</p>
                <p class="font-bold pb-4 ">Price: ${service.price}</p>
                <div class="flex justify-between">

                    <Link to={`/serviceDetails/${service._id}`}>
                        <button class="btn-white">View more</button>
                    </Link>
                    

                    <Link to={`/makeOrder/${service._id}`} class="hover:shadow-xl">
                        <button class="btn-gray">Buy Now</button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default SingleService;