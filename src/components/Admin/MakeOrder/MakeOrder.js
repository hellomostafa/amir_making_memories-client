import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useForm } from "react-hook-form";

const MySwal = withReactContent(Swal)

const MakeOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {id} = useParams()

    const [serviceById, setServiceById] = useState([])
    const [order, setOrder] = useState([])

    const history = useHistory()

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
    const onSubmit = data => {

        const formData =  {
            CustomerName: data.name,
            phone: data.phone,
            CustomerEmail: data.email,
            address: data.address
        }
        //console.log(formData)

        const newOrder = {...order, ...formData}
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
            showConfirmButton: false
        })

        setTimeout(() => {
            history.push('/')
        }, 3000);
        
        
        

    }

    //console.log(serviceById)

    return (
        <div>
             <div class="bg-black w-full py-11"></div>
             <div class="container mx-auto pt-5 pb-10 min-h-screen relative">

                 <h2 class="text-center">Place order</h2>

                <div class="flex flex-col-reverse md:flex-row justify-center items-center pt-6  pb-5">
                    <div class="w-full md:w-2/4 pl-4 pb-5">
                        <h4 class="text-2xl pb-4">Shipping Information</h4>
                        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" name="name" placeholder="Name" class="mb-2 " {...register("name")}  required/>
                            <br/>
                            <input type="number" name="phone" placeholder="Phone" class="mb-2" {...register("phone")}  required/>
                            <br/>
                            <input type="text" name="email" placeholder="Email" class="mb-2" {...register("email")}  />
                            <br/>
                            <textarea name="address" id="" cols="21" rows="3" placeholder="Address" {...register("address")}  required></textarea>
                            <br/>
                            <button type="submit" class="btn-black absolute xs:bottom-8 md:bottom-50 left-4">Order Now</button>
                        </form>
                    </div>

                
                    <div class="flex flex-row-reverse items-center pt-4">
                        <img src={serviceById.img} alt="" class="hidden sm:block h-60"/>
                        <div class="pl-4">
                            <h4 class="text-2xl pb-3">{serviceById.name}</h4>
                            <p>{serviceById.details}</p>
                            <p class="font-bold py-3">Price: ${serviceById.price}</p>
                            
                        </div>
                    
                    </div>
                 </div>
                 
             </div>
        </div>
    );
};

export default MakeOrder;