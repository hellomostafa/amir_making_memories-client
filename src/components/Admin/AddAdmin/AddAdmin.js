import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const AddAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useHistory()
    

    const onSubmit = data => {
        const formData = {
            email: data.email,
            password: data.password
        }
        console.log(formData)
       
        fetch('https://secret-reef-05048.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(result=> {
            if(result){
                MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Admin Added',
                timer: '2500',
                showConfirmButton: false
                })

                setTimeout(() => {
                    history.push('/admin/order')
                }, 2000);
            }
            else{
                alert('Something Wrong!')
            }
        })
        

    };

    return (
        <div class="bg-white rounded-2xl shadow-xl z-20 pt-8 pb-12 px-12">
            <div>
                <h2>Add Admin</h2>
            </div>
            <div class="pt-6 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" name="email" {...register("email")} placeholder="Email" class="mb-3 form-control" required/>
                {errors.name && <span>This field is required</span>}

                 <input type="password" name="password" {...register("password")} placeholder="Password" class="mb-3 form-control" required/>
                {errors.price && <span>This field is required</span>}

                
                <input type="submit" class="btn-gray cursor-pointer"/>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;