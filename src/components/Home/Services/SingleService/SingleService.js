import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    return (
        <div class="w-80 m-5">
            <img src={service.img} alt="" />
            <div class="py-4">
                <h3 class="text-3xl">{service.name}</h3>
                <p class="py-3">{service.details}</p>
                <p class="font-bold pb-4 ">Price: ${service.price}</p>
                <div class="flex justify-between">

                    <Link to={`/serviceDetails/${service._id}`}>
                        <button class="btn-white">Read more</button>
                    </Link>
                    

                    <Link to={`/makeOrder/${service._id}`}>
                        <button class="btn-black">Buy Now</button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default SingleService;