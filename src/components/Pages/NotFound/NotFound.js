import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../../img/Error TV.svg'

const NotFound = () => {
    return (
        <div>
            <div class="container mx-auto pt-10 pb-20 flex flex-col items-center justify-center">
                <img class="h-96 drop-shadow-2xl" src={errorImg} alt="" />

                <Link to="/">
                    <button class="btn-gray">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;