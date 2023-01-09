import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllDevice from './AllDevice';

const Single = () => {
    const a = useLoaderData();
    const {_id, name, img} = a;

    const [review, setreview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviewss?category=${_id}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [_id])

    console.log(a);

    return (
        <div className='single-course-container review-detail'>
            <h1 className='d-grid justify-content-center bg-danger mb-5 p-2'>Category:{name}</h1>
            <div>
            {
                            review.map(x => <AllDevice
                                key={x._id}
                                x={x}
                            ></AllDevice>)
                        }
            </div>

        </div>
    );
};

export default Single;