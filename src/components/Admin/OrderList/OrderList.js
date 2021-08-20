import React, { useEffect, useState } from 'react';

const OrderList = () => {

    const [orderList, setOrderList] = useState([])
    
    useEffect(() => {
        fetch('https://secret-reef-05048.herokuapp.com/orderList', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [])

    return (
        <div class="bg-white rounded-2xl shadow-xl z-20 pt-8 pb-12 px-12">
            <h2>Order List</h2>
            <div class="pt-5">
                <table class="table-auto border-collapse border border-gray-700">
                    <thead>
                        <tr>
                            
                            <th class="table-s">Customer Email</th>
                            <th class="table-s">Service</th>
                            <th class="table-s">Price</th>
                            <th class="table-s">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orderList.map(order => (
                                <tr>
                                    
                                    <td class="table-s">{order.customerEmail}</td>
                                    <td class="table-s">{order.product.name}</td>
                                    <td class="table-s"> ${order.product.price}</td>
                                    <td class="table-s">
                                        <select class="btn-status w-36 py-2 text-white">
                                            <option>Pending</option>
                                            <option>Shipped</option>
                                            <option>Completed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;