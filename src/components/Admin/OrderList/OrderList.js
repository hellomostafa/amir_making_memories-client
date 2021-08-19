import React, { useEffect, useState } from 'react';

const OrderList = () => {

    const [orderList, setOrderList] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:4040/orderList', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [])

    return (
        <div>
            <h2>Order List</h2>
            <div class="pt-5">
                <table class="table-auto border-collapse border border-black">
                    <thead>
                        <tr>
                            
                            <th class="table-s">Service</th>
                            <th class="table-s">Price</th>
                            <th class="table-s">Customer Name</th>
                            <th class="table-s">Customer Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orderList.map(order => (
                                <tr>
                                    
                                    <td class="table-s">{order.name}</td>
                                    <td class="table-s"> ${order.price}</td>
                                    <td class="table-s">{order.CustomerName}</td>
                                    <td class="table-s">{order.CustomerEmail}</td>
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