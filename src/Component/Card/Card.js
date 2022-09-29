import { faClock, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = ({ exercise, addToList }) => {
    const { name, img, description, step, time } = exercise;

    return (
        <div className="card card-compact w-70  bg-base-100 shadow-xl relative rounded-xl pb-16">
            <img className='rounded-2xl p-2' src={img} alt="" />
            <div className="card-body px-3">
                <h3 className="card-title text-xl font-bold pb-2">{name}</h3>
                <p className='text-sm pb-2 text-zinc-500 text-ellipsis'>{description}</p>
                <p className='pb-2 font-medium'><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon> Have to do : {step} times </p>
                <p className='font-medium'> <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Time required : {time}s</p>
            </div>
            <button className='w-[95%] border text-white bg-green-600 font-bold 
                rounded-xl hover:text-green-600 hover:bg-white hover:border-green-600 absolute bottom-0 p-2 m-2' onClick={() => addToList(exercise)}>Add to list</button>




        </div>
    );
};

export default Card;