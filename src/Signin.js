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
        <div  className="background img-fluid">
            <form onSubmit={handleSubmit}>
                <p className='textstyle' >Enter intern id:</p>
            <input type="number" style={{ padding: '20px', fontSize: '20px', borderRadius: '3', fontWeight: '600'   }}
            value={idno}
            onChange={(e)=>setIdno(e.target.value)}
             />
            <br />
            <br />
        
            <button type="submit" className="btn btn-primary btn-lg zoom"   >check for credits</button>
            </form>
        </div>
    )
} 


export default SignIn;

