import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Services from '../Services';

const ServiceDetails = () => {

    const {id} = useParams()
    const [serviceDetailsById, setServiceDetailsById] = useState([])

    useEffect(() => {
        fetch(`https://secret-reef-05048.herokuapp.com/services/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setServiceDetailsById(data))
    }, [id])



    return (
        <div>
            
            <div class="container mx-auto py-10">
                <h2 className="">Service Details</h2>
                <div class="flex flex-col sm:flex-row items-center pt-5 border-b-2 shadow-2xl rounded-2xl w-80 md:w-full mx-auto">
                    <img className="shadow-2xl rounded-t-xl md:rounded-l-xl" src={serviceDetailsById.img} alt="" class=""/>
                    <div class="p-8">
                        <h4 class="text-2xl pb-3">{serviceDetailsById.name}</h4>
                        <p>{serviceDetailsById.details}</p>
                        <p class="font-bold py-3">Price: ${serviceDetailsById.price}</p>
                    </div>
                    
                </div>

                <h2 class="text-2xl text-center pt-20">Explore More</h2>
                <Services/>
            </div>
        </div>
    );
};

export default ServiceDetails;