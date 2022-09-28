import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return (
        <div className=' mt-12 ml-12'>
            <div className='flex align-middle text-green-600'>
                <FontAwesomeIcon className='text-4xl pr-4' icon={faDumbbell}></FontAwesomeIcon>
                <h1 className='text-2xl font-bold'>Daily Workout Station</h1>
            </div>
            <h3 className='text-xl font-medium mt-10'>Select today’s exercise</h3>

        </div>
    );
};

export default Header;