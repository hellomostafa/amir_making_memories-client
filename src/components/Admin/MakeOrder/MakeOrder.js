import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const MakeOrder = () => {
    const {id} = useParams()

    const [serviceById, setServiceById] = useState([])
    const [order, setOrder] = useState([])

    useEffect(() => {
        //console.log(id, 'inside effect')
        fetch(`http://localhost:4040/makeOrder/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setServiceById(data)
            setOrder(data)
        })

    }, [id])


    // Placing Order
    const handleOrder = () => {
        const newOrder = {...order}
        //console.log(newOrder)
        fetch('http://localhost:4040/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order Placed!',
            // timer: '2500',
            showConfirmButton: true
        })
    }

    //console.log(serviceById)

    return (
        <div>
             <div class="bg-black w-full py-11"></div>
             <div class="container mx-auto py-20">

                 <h2>Place order</h2>
                 <div class="flex items-center pt-4">
                    <img src={serviceById.img} alt="" class="hidden sm:block h-60"/>
                    <div class="pl-4">
                        <h4 class="text-2xl pb-3">{serviceById.name}</h4>
                        <p>{serviceById.details}</p>
                        <p class="font-bold py-3">Price: ${serviceById.price}</p>
                        <button onClick={handleOrder} class="btn-black">Order Now</button>
                    </div>
                 
                 </div>
                 
             </div>
        </div>
    );
};

export default MakeOrder;