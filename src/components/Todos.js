import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getNumber from '../utils/getNumber';

const Todos = () => {
    const [todos, setTodos]= useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${getNumber()}`)
          .then(res=>setTodos(res.data));
      },[]);
    return (
        <div className='card'>
            <h1>{todos.title}</h1>
            <p>completed:<b>{todos.completed?.toString()}</b></p>
        </div>
    );
};

export default Todos;