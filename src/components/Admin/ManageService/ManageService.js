import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const ManageService = () => {

    const history = useHistory()
    const [manageServices, setManageServices] = useState([])

    useEffect(()=> {
        fetch('https://secret-reef-05048.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setManageServices(data))
    }, [])


    // Deleting Service

    const handleDelete = (id) => {
        //console.log('deleted', id)
        fetch(`https://secret-reef-05048.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                MySwal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Service Deleted',
                timer: '2500',
                showConfirmButton: false
                })

                setTimeout(() => {
                    history.push('/admin/manageServices')
                }, 2000);
            }else {
                alert('something wrong')
            }
        })
    }


    return (
        <div class="bg-white rounded-2xl shadow-xl z-20 pt-8 pb-12 px-12">
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
                                    <td class="table-s font-semibold">${ms.price}</td>
                                    <td class="table-s text-center">
                                        <button onClick={()=> handleDelete(ms._id)} title="Delete"><i class="fas fa-trash text-red-600"></i></button>
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

export default ManageService;