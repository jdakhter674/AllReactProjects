import React, { useEffect, useState } from 'react'
import "./Registration.css"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link , useHistory } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { registerDispatch } from '../redux/actions/actions';
import swal from 'sweetalert';

const Registration = () => {

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[cPassword,setCpassword]=useState("")

const history=useHistory()

const {currentUser}=useSelector(state=>state.userReducer)
const {error}=useSelector(state=>state.userReducer)
// console.log(error)
// console.log("currentUser",currentUser)
// if(error){
//   alert(error)
// }




useEffect(()=>{
  if(currentUser){
    console.log(currentUser)
    history.push("/")
  }
},[currentUser,history])



const dispatch=useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault()
    if(password !== cPassword){
        return;
    }
    if(error){
      swal(error)
    }
    dispatch(registerDispatch(email,password))
    setEmail("")
    setPassword("")
    setCpassword("")
}






    return (
        <div className="container p-5" >
           
                <h2 className="lockReg"><LockOutlinedIcon className="lockIcon" /></h2>
            
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" size="100px" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} id="inputPassword4" placeholder="Password" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Retype Password</label>
            <input type="password" className="form-control" id="inputPassword4" onChange={(e)=>setCpassword(e.target.value)} value={cPassword} placeholder="Password" />
          </div>
        </div>
    
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <Link to={'/login'}>
            <h4 className="arrowBack">

        <ArrowBackIcon  />
    
            </h4>
        </Link>
        <button type="submit" className="btnRegistration">Sign Up</button>
      </form>
            
        </div>
    )
}

export default Registration
