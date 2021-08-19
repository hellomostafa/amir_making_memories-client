import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [manageServices, setManageServices] = useState([])

    useEffect(()=> {
        fetch('http://localhost:4040/services')
        .then(res => res.json())
        .then(data => setManageServices(data))
    }, [])
    return (
        <div>
            <h2>Manage Services</h2>
            <div class="pt-5">
                <table class="table-auto border-collapse">
                    <thead>
                        <tr>
                            <th class="table-s">Name</th>
                            <th class="table-s">Price</th>
                            <th class="table-s">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            manageServices.map(ms => (
                                <tr>
                                    <td class="table-s">{ms.name}</td>
                                    <td class="table-s">${ms.price}</td>
                                    <td class="table-s">..</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;