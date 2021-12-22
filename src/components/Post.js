import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getNumber from '../utils/getNumber';

const Post = () => {
    const [post, setPost]= useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${getNumber()}`)
          .then(res=>setPost(res.data));
      },[]);
    return (
        <div className='card'>
           <h1>{post.title}</h1>
           <p>{post.body}</p>
        </div>
    );
};

export default Post;