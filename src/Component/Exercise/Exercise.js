import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';

const Exercise = () => {
    const [exercises, setExercise] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])

    const addToList = (exercises) => {
        const newList = [...list, exercises]
        setList(newList)
    }

    return (

        <div ><h3 className='text-xl font-medium lg:m-8 hidden lg:inline lg:ml-12'>Select today’s exercise</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-6 lg:mx-12 lg:mt-2'>
                <Sidebar list={list}></Sidebar>

                {
                    exercises.map(exercise => <Card
                        key={exercise.id}
                        exercise={exercise}
                        addToList={addToList}

                    ></Card>)
                }

            </div>

        </div>
    );
};

export default Exercise;