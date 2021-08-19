import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Auth/useAuth';



const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const {signup} = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }

        try {
            setError('')
            setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
            
        }
        setLoading(false)

        
    }

    return (
        <div class="min-h-screen bg-purple-300 flex justify-center items-center">
        
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
            <h2 class="text-3xl font-bold text-center mb-4 pb-4">Sign Up</h2>
            
            </div>
            {error && <p class="text-red-500 pb-2">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div class="space-y-4">
                <input type="email" placeholder="Email " class="form-control" ref={emailRef} required/>
                <input type="password" placeholder="Password" class="form-control" ref={passwordRef} required/>
                <input type="password" placeholder="Confirm Password" class="form-control" ref={passwordConfirmRef} required/>
                </div>
                <div class="text-center mt-6">
                <button disabled={loading} type="submit" class="py-3 w-64 text-md text-white bg-gray-800 rounded-md">Sign Up</button>
            
                <p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"><Link to="/login">Sign In</Link> </span></p>
                </div>
            </form>
        </div>
        
        </div>
    );
};

export default SignUp;