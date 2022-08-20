import React ,{useState} from 'react'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { auth } from '../../Firebase.js'
import "./index.css"


 
function SignIn(props) {

    const [idno,setIdno]=useState(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit(idno);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center',}} className="background img-fluid">
            <form onSubmit={handleSubmit}>
            <input type="number" style={{ padding: '30px', fontSize: '20px', borderRadius: '3', fontWeight: '600'   }}
            value={idno}
            onChange={(e)=>setIdno(e.target.value)}
             />
            <br />
            <button type="submit" className="btn btn-primary btn-lg zoom" style={{ padding: '30px', fontSize: '20px', borderRadius: '3', fontWeight: '600', background:'cyan'   }}>check for credits</button>
            </form>
        </div>
    )
} 


export default SignIn;

