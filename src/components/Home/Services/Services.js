import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import SingleService from './SingleService/SingleService';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:4040/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div id="service">
            <div class="container mx-auto py-10">
                <div class="text-center pb-8">
                   
                    <h2 class="text-5xl">Our Services</h2>
                    <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                    
                </div>

                <div class="flex flex-wrap justify-center">
                    {
                        services.map(service => <SingleService key={service._id} service={service}></SingleService>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;