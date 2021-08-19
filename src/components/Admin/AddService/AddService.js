import axios from 'axios';
import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const AddService = () => {

    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useHistory()
    
    const handleImageUpload = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '08e5a87cb0f837aad3265a1622d2a394');
        imageData.append('image', e.target.files[0])
        
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function(response){
            setImageURL(response.data.data.display_url)
            //console.log(response)
        })
        .catch(function(error){
            console.log(error)
        });
    }

    const onSubmit = data => {
        const formData = {
            name: data.name,
            price: data.price,
            details: data.details,
            img: imageURL
        }
        //console.log(formData)
       
        fetch('http://localhost:4040/addService', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Service Added',
            timer: '2500',
            showConfirmButton: false
        })

        setTimeout(() => {
            history.push('/admin/order')
        }, 2000);

    };

    return (
        <div class="bg-white rounded-2xl shadow-xl z-20 pt-8 pb-12 px-12">
            <div>
                <h2>Add New Service</h2>
            </div>
            <div class="pt-6 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" name="name" {...register("name")} placeholder="Enter Service Name" class="mb-3 form-control" required/>
                {errors.name && <span>This field is required</span>}

                {/* register your input into the hook by invoking the "register" function */}
                <input type="number" name="price" {...register("price")} placeholder="Enter Price" class="mb-3 form-control" required/>
                {errors.price && <span>This field is required</span>}

                
                {/* include validation with required or other standard HTML validation rules */}
                <textarea type="text" name="details" {...register("details")} placeholder="Write Service Details" class="mb-3 form-control" required/>
                {/* errors will return when field validation fails  */}
                {errors.details && <span>This field is required</span>}


                <label htmlFor="file" class="pb-1">Add Your Service Photo</label>
                <br/>
                <input type="file" name="photo" onChange={handleImageUpload} required  class="mb-3 rounded form-control"/>
                {/* errors will return when field validation fails  */}
                {errors.photo && <span>This field is required</span>}

                
                <input type="submit" class="btn-black cursor-pointer"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;