import React, { useState } from 'react'
import Details from './Details';
import './App.css';
import SignIn from './Signin';
function App() {
   {/* const [user]=useAuthState(auth); */}
const [user,setUser]=useState('');

const func = (data)=>{
  console.log("something is coming from sighin ",data);
setUser(data)
};
  return (
    <>
   
 
    {user ? <Details user={user}/>: <SignIn onSubmit={func} />}
  
  </>
  );
}

export default App;
