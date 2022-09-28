import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Exercise = () => {
    const [exercises, setExercise] = useState([])
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])
    return (

        <div className='grid grid-cols-3 gap-5 mx-12 mt-2'>
            {
                exercises.map(exercise => <Card
                    key={exercise.id}
                    exercise={exercise}
                ></Card>)
            }

        </div>
    );
};

export default Exercise;