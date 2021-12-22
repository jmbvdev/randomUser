import './App.css';
import { useState } from 'react';
import Todos from './components/Todos';
import Post from './components/Post';
import User from './components/User';


function App() {
  
const[component,setComponent]= useState(<User/>)

  return (
    <>
  <button onClick={()=>setComponent(<User/>)}>Users</button>
  <button onClick={()=>setComponent(<Post/>)}>Posts</button>
  <button onClick={()=>setComponent(<Todos/>)}>To Do's</button>
    {component}
    </>
  )
}

export default App;
