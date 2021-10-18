import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useAuth } from '../Pages/Sign/Auth/useAuth';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import ManageService from './ManageService/ManageService';
import Order from './Order/Order';
import OrderList from './OrderList/OrderList';

const Admin = () => {

    const [isAdmin, setIsAdmin] = useState(false)
    const {currentUser} = useAuth()

    useEffect(()=> {
        fetch('https://secret-reef-05048.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: currentUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [currentUser.email])



    return (
        <div class="min-h-screen w-full bg-purple-300 ">
            
            <div class="flex">
                <Router>
                    <div class="w-52 min-h-screen bg-banner bg-center bg-cover bg-repeat-x text-white pt-12">
                        <ul>
                            <Link to="/admin/order">
                                <li class="p-4 hover:text-primary hover:bg-black pl-8 cursor-pointer">
                                    Order
                                </li>
                            </Link>

                            {
                                isAdmin &&
                            <>
                            
                            <Link to="/admin/orderList">
                                <li class="p-4 hover:text-primary hover:bg-black pl-8 cursor-pointer">
                                    Order List
                                </li>
                            </Link>

                            
                            <Link to="/admin/addService">
                                <li class="p-4 hover:text-primary hover:bg-black pl-8 cursor-pointer">
                                    Add Service
                                </li>
                            </Link>
                            <Link to="/admin/manageServices">
                                <li class="p-4 hover:text-primary hover:bg-black pl-8 cursor-pointer">
                                    Manage Services
                                </li>
                            </Link>
                            <Link to="/admin/addAdmin">
                                <li class="p-4 hover:text-primary hover:bg-black pl-8 cursor-pointer">
                                    Add Admin
                                </li>
                            </Link>
                            </>

                            }
                        </ul>
                    </div>
                    
                    <div class="p-8 ">
                        <Switch>
                            <Route path="/admin/order">
                                <Order/>
                            </Route>
                            <Route path="/admin/orderList">
                                <OrderList/>
                            </Route>
                            <Route path="/admin/addService">
                                <AddService/>
                            </Route>
                            <Route path="/admin/manageServices">
                                <ManageService/>
                            </Route>
                            <Route path="/admin/addAdmin">
                                <AddAdmin/>
                            </Route>
                        </Switch>
                    </div>


                </Router>
            </div>
        </div>
    );
};

export default Admin;