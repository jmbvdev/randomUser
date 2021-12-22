import React, { useEffect, useState } from 'react';
import axios from "axios"
import getNumber from '../utils/getNumber';
const User = () => {
    const [user, setUser]= useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${getNumber()}`)
          .then(res=>setUser(res.data));
      },[]);
    return (
        <div className='card'>
             <h1>{user.name}</h1>
            <ul>
                <li>{user.address?.city}</li>
                <li>{user.phone}</li>
                <li>{user.email}</li>
            </ul>
        </div>
    );
};

export default User;