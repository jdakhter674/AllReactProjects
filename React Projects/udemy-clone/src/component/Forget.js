import React, { useState } from 'react'
import './Forget.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Auth from '../Database/firebase'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'


const Forget = () => {


    const [email , setEmail] = useState('')

    const handleForget=(e)=>{
        if(email === ''){
          swal("Please insert Your Email Fisrt","",'error')
        }
       if(email != ''){
           Auth.sendPasswordResetEmail(email)
           .then(()=>{
               alert('Email has been sent to your gmail account')
           })
           .catch((error)=>{
console.log(error)
           })
       }
        
    }


    return (
        <div className="forget">
           <div className="forget_container">
               <h6 className="forget_title">Forget Your Email </h6>
               <div className="forget_input_container">
               <EmailOutlinedIcon />
               <input className="forget_input" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Your Email" />
               </div>
               <Link to='/'>  Back To SignIn</Link>
               <button onClick={handleForget} className="forget_button">Forget</button>
            </div>
        </div>
    )
}

export default Forget
