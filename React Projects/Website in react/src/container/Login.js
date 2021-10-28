import React, { useEffect, useState } from 'react';
import './Login.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from './firebase.js'
import {Link , useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginDispatch } from '../redux/actions/actions';
import swal from 'sweetalert';






const Login = () => {
    // const classes = useStyles();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name , setName]=useState("")

    const dispatch=useDispatch()
    const history=useHistory()
    
    const {currentUser}=useSelector(state=>state.userReducer)
    const {error}=useSelector(state=>state.userReducer)

const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email || !password){
        return ;
    }
    if(error){
        // alert(error)
        swal(error);
    }

    dispatch(loginDispatch(email,password,name))

}


useEffect(()=>{
    
    if(currentUser){
        history.push("/")
        
    }

},[history,currentUser])


// console.log(firebase)

    return (
        <div className="cont">
            <h2 className="lockSign"><LockOutlinedIcon className="lockIconSign" /></h2>


            <form onSubmit={handleSubmit}>
            
            <h2 className="Sign">Sign-In</h2>

         
               <div>
               
                <TextField  id="standard-basic" onChange={(e)=>setName(e.target.value)} required value={name} className="textFeild1" label="Enter Your Name" />
                <TextField  id="standard-basic" onChange={(e)=>setEmail(e.target.value)} required value={email} className="textFeild1" label="Email" />
                <TextField id="standard-basic"onChange={(e)=>setPassword(e.target.value)} required value={password} className="textFeild1" label="Password"  />
                {/* <TextField id="outlined-basic" MarginTop={10} className="textFeild2" label="Enter Last Name" variant="outlined" /> */}
                <Link to={'/signup'}>
                <h4>click here to create account</h4>
                </Link>
                <button className="loginBtn" type="submit"> Sign In</button>
               </div>
            </form>
         
        </div>
    )
}
export default Login