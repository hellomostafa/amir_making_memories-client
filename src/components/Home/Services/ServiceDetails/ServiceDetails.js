import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Services from '../Services';

const ServiceDetails = () => {

    const {id} = useParams()
    const [serviceDetailsById, setServiceDetailsById] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4040/serviceDetails/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setServiceDetailsById(data))
    }, [id])



    return (
        <div>
            <div class="bg-black w-full py-11"></div>
            <div class="container mx-auto py-10">
                <h2>Service Details</h2>
                <div class="flex flex-col sm:flex-row items-center py-4 border-b-2">
                    <img src={serviceDetailsById.img} alt="" class=""/>
                    <div class="pl-4">
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