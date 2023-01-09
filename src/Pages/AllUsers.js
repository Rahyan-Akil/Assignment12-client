import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        } 
    });
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }
    
    
    return (
        <div>
            {
        users.map((user, i) =><div className='d-flex' key={user._id}>
            <p>{i+1}</p>
            <p>. {user.name} — {user.email}</p>
            { user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn ms-5 m-1 btn-primary'>Make Verified Seller</button>}
            
          </div>)
      }
        </div>
    );
};

export default AllUsers;