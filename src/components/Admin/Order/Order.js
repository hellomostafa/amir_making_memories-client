import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Pages/Sign/Auth/useAuth';


const Order = () => {
    const history = useHistory()
    const [error, setError] = useState("")
    const {currentUser, logout } = useAuth()

    const [orderViaEmail, setOrderViaEmail] = useState([])

    console.log(currentUser)

    useEffect(() => {
        fetch('http://localhost:4040/orderViaEmail?customerEmail='+currentUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setOrderViaEmail(data))
    }, [currentUser.email])

    console.log(orderViaEmail)
    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to Logout')
        }
    }

    return (
        <div class="bg-white rounded-2xl shadow-xl z-20 pt-8 pb-12 px-12 ">
            <div class="w-full flex flex-col items-center justify-center">
                <div class="text-center">
                    <h2>Profile</h2>
                    {error && <p class="text-red-500">{error}</p>}
                    {
                        <img class="p-6 w-48" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="" />
                    }
                    <strong>Email: {currentUser.email}</strong>
                    <br/>
                    <button onClick={handleLogout} class="btn-gray mt-4">Log Out</button>
                </div>
            </div>

            <div class="pt-10">
                <h2 class="text-xl font-semibold">Your Previous Orders</h2>
                <div class="mt-4 flex md:flex-row flex-wrap items-center">
                    {
                        orderViaEmail.map(order => (
                            <div class="m-4 w-42 rounded-xl shadow-xl">
                                
                                <div class="flex flex-col md:flex-row xs:pb-5">
                                    <img class="rounded-t-xl md:rounded-l-xl h-32"  src={order.img} alt="" />
                                    <div class="px-4 w-42">
                                        <p class="pt-3 pb-2 text-sm text-black font-semibold">Order Date: {order.day}-{order.month}-{order.year}</p>
                                        <h6>{order.name}</h6>
                                        <div class="py-3 flex flex-col md:flex-row items-center md:justify-between">
                                            <p class="text-black font-semibold pb-3">${order.price}</p>
                                            <button class="btn-status py-1 w-24">Pending...</button>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Order;