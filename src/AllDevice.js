import React from 'react';

const AllDevice = ({x}) => {
    const { userName, email, deviceModel, PhotoURL, location, rPrice, oPrice, uses, date } = x;
    return (
        <div  className='border border-3 border-success m-4 p-4'>
            <img  src={PhotoURL} alt="" /><br />
            <p>Seller Name: {userName}</p>
            <p>Device Model: {deviceModel}</p>
            <p>Location: {location}</p>
            <p>Resale Price: {rPrice} \-</p>
            <p>Original Price: {oPrice} \-</p>
            <p>Years of Use: {uses}</p>
            <p>Post Date: {date}</p>
        </div>
    );
};

export default AllDevice;