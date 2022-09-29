import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'






const Sidebar = ({ list }) => {
    let time = 0;
    for (const exercise of list) {
        time = time + exercise.time
    }


    const [bt, setBt] = useState([])

    useEffect(() => {
        console.log('gg');
        localStorage.setItem('Break Time', JSON.stringify(bt))
    }, [bt])
    const breakTime = (mg) => {
        setBt(mg);
    }


    const dbt = localStorage.getItem('Break Time')

    // sweetalart
    const completed = () => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Today`s  activities are completed',
        }
        )
    }




    return (
        <div className='bg-white p-3 fixed right-0 top-0'>
            {/* description pat 1*/}
            <div className='flex items-center py-5'>
                <img className='w-20' src="pic.png" alt="" />
                <div>
                    <h3 className='text-xl font-bold'>Mohammad Mozammel</h3>
                    <h4 className='text-zinc-500'><FontAwesomeIcon icon={faMapLocationDot}> </FontAwesomeIcon>  Hazigonj , Chandpur </h4>
                </div>
            </div>
            {/* description pat 2*/}
            <div className='bg-gray-100 flex justify-around text-sm font-medium text-zinc-500 rounded-xl p-4'>
                <div>
                    <h3 > <span className='text-2xl font-bold text-black'>55</span> KG</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-black'>5.4"</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3><span className='text-2xl font-bold text-black'>22</span>yrs</h3>
                    <p>Age</p>
                </div>
            </div>
            {/* Add A Break  */}
            <h3 className='text-xl font-medium py-5'>Add A Break</h3>
            <div className=' bg-gray-100 flex justify-around text-sm font-medium p-4 rounded-xl'>
                <button className=' bg-white p-2 rounded-full hover:bg-green-600 hover:text-white' onClick={() => breakTime(10)}>10s</button>
                <button className='btn bg-white p-2 rounded-full hover:bg-green-600 hover:text-white' onClick={() => breakTime(20)}>20s</button>
                <button className='btn bg-white p-2 rounded-full hover:bg-green-600 hover:text-white' onClick={() => breakTime(30)}>30s</button>
                <button className='btn bg-white p-2 rounded-full hover:bg-green-600 hover:text-white' onClick={() => breakTime(40)}>40s</button>
                <button className='btn bg-white p-2 rounded-full hover:bg-green-600 hover:text-white' onClick={() => breakTime(50)}>50s</button>
            </div>
            {/* Exercise Details */}
            <h3 className='text-xl font-medium py-5'>Exercise Details </h3>
            <div className='flex justify-between bg-gray-100  font-medium p-4 rounded-xl mb-3'>
                <h3>Exercise time </h3>
                <h5>
                    <span> {time} </span>
                    seconds
                </h5>
            </div>
            <div className='flex justify-between bg-gray-100  font-medium p-4 rounded-xl'>
                <h3>Break time</h3>
                <h5>
                    <span> {dbt} </span>
                    seconds
                </h5>
            </div>
            <button className='w-[100%] border text-white bg-green-600 font-bold p-3 rounded-xl my-5  hover:text-green-600 hover:bg-white hover:border-green-600' onClick={completed}>
                Activity Completed
            </button>



        </div>
    );
};

export default Sidebar;