import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return (

        <div className='flex align-middle text-green-600  my-12 ml-12'>
            <FontAwesomeIcon className='text-4xl pr-4' icon={faDumbbell}></FontAwesomeIcon>
            <h1 className='text-2xl font-bold'>Daily Workout Station</h1>
        </div>



    );
};

export default Header;