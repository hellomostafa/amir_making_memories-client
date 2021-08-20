import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useForm } from "react-hook-form";
import { useAuth } from '../../Pages/Sign/Auth/useAuth';

const MySwal = withReactContent(Swal)

const MakeOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // auth
    const {currentUser} = useAuth()

    

    const {id} = useParams()

    const [serviceById, setServiceById] = useState([])
    const [orders, setOrders] = useState([])
    

    const history = useHistory()

    useEffect(() => {
        //console.log(id, 'inside effect')
        fetch(`https://secret-reef-05048.herokuapp.com/services/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setServiceById(data)
            setOrders(data)
        })

    }, [id])


    // Placing Order
    const onSubmit = data => {

        const shippingData =  {
            shipToName: data.name,
            phone: data.phone,
            shipToEmail: data.email,
            address: data.address,
            product: orders
        }
        //console.log(formData)

        const loggedInUser = {
            customerEmail: currentUser.email
        }

        const date = new Date();
        const orderDate = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        }
        // const orderDate = [ date.getMonth(), date.getDate(), date.getFullYear()];

        const newOrder = { ...shippingData, ...loggedInUser, ...orderDate}
        console.log(newOrder)

        fetch('https://secret-reef-05048.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)

        })
        .then(result =>{
            if(result){
                MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Order Placed!',
                timer: '2000',
                showConfirmButton: false
                })

                setTimeout(() => {
                    history.push('/admin/order')
                }, 3000);
            }else {
                MySwal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ooops',
                text: 'Something went wrong!',
                timer: '2000',
                showConfirmButton: false
                })
            }
        })
        
        
        
        

    }

    //console.log(serviceById)

    return (
        <div>
             
             <div class="container mx-auto pt-5 pb-10 min-h-screen relative">

                 <h2 class="text-center">Place order</h2>

                <div class="flex flex-col-reverse md:flex-row justify-center items-center pt-6  pb-5">
                    <div class="w-full md:w-2/4 pl-4 pb-5">
                        <h4 class="text-2xl pb-4">Shipping Information</h4>
                        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" name="name" placeholder="Name" class="mb-2 form-control" {...register("name")}  required/>
                            
                            <input type="number" name="phone" placeholder="Phone" class="mb-2 form-control" {...register("phone")}  required/>
                            
                            <input type="text" name="email" placeholder="Email" class="mb-2 form-control" {...register("email")}  />
                            
                            <textarea name="address" id="" cols="21" rows="3" class="form-control" placeholder="Address" {...register("address")}  required></textarea>
                            <br/>
                            <button type="submit" class="btn-gray absolute xs:bottom-8 md:bottom-50 left-4">Order Now</button>
                        </form>
                    </div>

                
                    <div class="flex flex-row-reverse items-center pt-4">
                        <img src={serviceById.img} alt="" class="hidden sm:block h-60"/>
                        <div class="pl-4">
                            <h4 class="text-2xl pb-3">{serviceById.name}</h4>
                            <p>{serviceById.details}</p>
                            <p class="font-bold text-2xl py-3">Price: ${serviceById.price}</p>
                            
                        </div>
                    
                    </div>
                 </div>
                 
             </div>
        </div>
    );
};

export default MakeOrder;